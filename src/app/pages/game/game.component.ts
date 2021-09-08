import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
// @ts-ignore
import randomWords from 'random-words'
import { GameService } from 'src/app/services/game.service';
import { Subscription } from 'rxjs';
import { LetterData } from 'src/app/models/letter-data';
@Component({
  selector: 'game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor(private speechService: SpeechService, private gameService: GameService) { }
  @Input() level?: string
  @Output() onResetDifficulty = new EventEmitter()
  wordsRemaining: number = 3
  totalWords: number = this.wordsRemaining
  currWordNum: number = 0
  isGameOn: boolean = false
  randomWord: string = ''
  audio: HTMLAudioElement | null = null
  userInput: string = ''
  letterSub: Subscription | undefined

  ngOnInit(): void {
    this.letterSub = this.gameService.clickedLetter$.subscribe(letterData => {
      this.handleLetter(letterData)
    })
  }

  ngOnDestroy() {
    this.letterSub?.unsubscribe()
  }


  onStartGame() {
    this.isGameOn = true
    this.wordsRemaining = this.speechService.getLevelWordsCount(this.level)
    this.totalWords = this.wordsRemaining
    this.generateAndPlayRandomWord()
  }

  generateAndPlayRandomWord() {
    this.randomWord = randomWords()
    console.log(this.randomWord)
    this.speechService.textToSpeech(this.randomWord).subscribe(() => {
      this.playWordSound()
    })
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
    alert('wrong')
  }

  handleLetter(letterData: LetterData) {
    const { letter, origin } = letterData
    if (origin === 'input') return
    if (letter === 'backspace') this.userInput = this.userInput.slice(0, this.userInput.length - 1)
    if (letter.length > 1) return
    this.userInput += letter
  }


}
