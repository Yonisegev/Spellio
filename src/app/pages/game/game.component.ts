import { Component, ElementRef, EventEmitter, Input, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { WordService as WordService } from 'src/app/services/word.service';
// @ts-ignore
import randomWords from 'random-words'
import { GameService } from 'src/app/services/game.service';
import { Subject } from 'rxjs';
import { LetterData } from 'src/app/models/letter-data';
import { takeUntil } from 'rxjs/operators';
import { ScoreComponent } from 'src/app/cmps/score/score.component';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit, OnDestroy {
  constructor(private wordService: WordService, private gameService: GameService) { }
  wordsRemaining: number = 3
  totalWords: number = this.wordsRemaining
  currWordNum: number = 0
  isGameOn: boolean = false
  isFirstTime: boolean = true
  isWrongGuess: boolean = false
  isLoadingHint: boolean = false
  randomWord: string = ''
  userInput: string = ''
  subs$: Subject<boolean> = new Subject<boolean>()
  error: string = ''
  hint: string = ''
  endingScore: number | undefined
  startGuessTime: number | null = null
  pathToAudioFile: string | undefined
  @Input() level?: string
  @Output() onResetDifficulty = new EventEmitter()
  @ViewChild('score')
  private scoreCmp: ScoreComponent | undefined
  @ViewChild('guessInput')
  set input(element: ElementRef<HTMLInputElement>) {
    if (element) {
      element.nativeElement.focus()
    }
  }

  ngOnInit(): void {
    this.initLetterSub()
  }

  ngOnDestroy() {
    this.subs$.next(true)
    this.subs$.unsubscribe()
  }

  onStartGame() {
    this.isGameOn = true
    this.isFirstTime = false
    this.wordsRemaining = this.wordService.getLevelWordsCount(this.level)
    this.currWordNum = 0
    this.totalWords = this.wordsRemaining
    this.generateAndPlayRandomWord()
  }

  generateAndPlayRandomWord() {
    this.randomWord = randomWords()
    this.wordService.textToSpeech(this.randomWord)
      .pipe(takeUntil(this.subs$))
      .subscribe(
        () => {
          this.startGuessTime = Date.now()
          this.playWordSound()
        },
      )
  }

  playWordSound() {
    const audio = new Audio(`${environment.audioURL}/${this.randomWord}.mp3`)
    audio.play()
  }

  onUserInput(ev: KeyboardEvent) {
    this.gameService.setClickedLetter({ letter: ev.key.toLowerCase(), origin: 'input' })
  }

  onWordSubmit(ev: Event) {
    ev.preventDefault()
    this.userInput = this.userInput.toLowerCase()
    if (this.userInput === this.randomWord) {
      this.onCorrectSpelling()
    } else {
      this.onWrongSpelling()
    }
  }

  onCorrectSpelling() {
    this.scoreCmp?.updateScore('add', this.startGuessTime)
    if (this.wordsRemaining > 0) {
      this.wordsRemaining--
      this.currWordNum++
      this.hint = ''
      this.error = ''
      if (this.wordsRemaining <= 0) {
        this.onGameOver()
      } else {
        this.generateAndPlayRandomWord()
      }
      this.userInput = ''

    }
  }

  onWrongSpelling() {
    this.isWrongGuess = true
    const errorSound = new Audio('../../../assets/sounds/error.wav')
    errorSound.play()
    this.scoreCmp?.updateScore('lower', null)
    setTimeout(() => {
      this.isWrongGuess = false
    }, 1000)
  }

  onGameOver() {
    this.endingScore = this.scoreCmp?.scoreValue
    this.isGameOn = false
    this.gameService.updateLeaderboard(this.endingScore || 0, this.level!).subscribe()
  }

  handleLetter(letterData: LetterData) {
    if (!this.isGameOn) return
    const { letter, origin } = letterData
    if (origin === 'input') return
    if (letter === 'backspace') this.userInput = this.userInput.slice(0, this.userInput.length - 1)
    if (letter.length > 1) return
    this.userInput += letter
  }

  onGetHint() {
    if (this.hint) return
    this.isLoadingHint = true
    this.wordService.getWordDefinition(this.randomWord)
      .pipe(takeUntil(this.subs$))
      .subscribe(
        definition => {
          this.isLoadingHint = false
          this.hint = definition
        },
        err => {
          this.error = err
        })
  }

  private initLetterSub() {
    this.gameService.clickedLetter$
      .pipe(takeUntil(this.subs$))
      .subscribe(letterData => {
        this.handleLetter(letterData)
      })
  }
}
