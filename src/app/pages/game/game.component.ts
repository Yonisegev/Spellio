import { Component, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { WordService as WordService } from 'src/app/services/word.service';
// @ts-ignore
import randomWords from 'random-words'
import { GameService } from 'src/app/services/game.service';
import { Subject } from 'rxjs';
import { LetterData } from 'src/app/models/letter-data';
import { takeUntil } from 'rxjs/operators';
import { ScoreComponent } from 'src/app/cmps/score/score.component';
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private wordService: WordService, private gameService: GameService) { }
  @Input() level?: string
  @Output() onResetDifficulty = new EventEmitter()
  @ViewChild('score')
  private scoreCmp: ScoreComponent | undefined
  wordsRemaining: number = 3
  totalWords: number = this.wordsRemaining
  currWordNum: number = 0
  isGameOn: boolean = false
  isFirstTime: boolean = true
  isWrongGuess: boolean = false
  randomWord: string = ''
  audio: HTMLAudioElement | null = null
  userInput: string = ''
  subs$: Subject<boolean> = new Subject<boolean>()
  error: string = ''
  hint: string = ''
  score: number = 0
  startGuessTime: number | null = null

  ngOnInit(): void {
    this.gameService.clickedLetter$
      .pipe(takeUntil(this.subs$))
      .subscribe(letterData => {
        this.handleLetter(letterData)
      })
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
    this.score = 0
    this.totalWords = this.wordsRemaining
    this.generateAndPlayRandomWord()
  }

  generateAndPlayRandomWord() {
    this.randomWord = randomWords()
    console.log(this.randomWord)
    this.wordService.textToSpeech(this.randomWord)
      .pipe(takeUntil(this.subs$))
      .subscribe(
        () => {
          this.startGuessTime = Date.now()
          this.playWordSound()
        },
        err => this.generateAndPlayRandomWord())
  }

  playWordSound() {
    this.audio = new Audio(`//localhost:3030/audio/${this.randomWord}.mp3`)
    this.audio.play()
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
    if (this.wordsRemaining > 0) {
      this.wordsRemaining--
      this.currWordNum++
      this.hint = ''
      this.error = ''
      this.scoreCmp?.addScore(this.startGuessTime)
      if (this.wordsRemaining <= 0) {
        alert('game over')
        this.isGameOn = false
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
    this.scoreCmp?.lowerScore()
    setTimeout(() => {
      this.isWrongGuess = false
    }, 1000)
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
    this.wordService.getWordDefinition(this.randomWord)
      .pipe(takeUntil(this.subs$))
      .subscribe(
        definition => {
          this.hint = definition
        },
        err => {
          this.error = err
        })
  }




}
