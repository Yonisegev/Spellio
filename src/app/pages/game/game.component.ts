import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpeechService } from 'src/app/services/speech.service';
// @ts-ignore
import randomWords from 'random-words'
import { GameService } from 'src/app/services/game.service';
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
  isGameOn: boolean = false
  randomWord: string = ''
  audio: HTMLAudioElement | null = null
  userInput: string = ''
  ngOnInit(): void {
    this.gameService.clickedLetter$.subscribe(letter => {
      this.handleLetter(letter)
    })
  }

  initLevel() {
    this.wordsRemaining = this.speechService.getLevelWordsCount(this.level)
  }
  onStartGame() {
    this.isGameOn = true
    this.playRandomWordSound()
  }

  playRandomWordSound() {
    this.randomWord = randomWords()
    console.log(this.randomWord)
    this.speechService.textToSpeech(this.randomWord).subscribe(() => {
      this.audio = new Audio(`//localhost:3030/audio/${this.randomWord}.mp3`)
      this.audio.play()
    })
  }

  onUserInput(ev: KeyboardEvent) {
    this.gameService.setClickedLetter(ev.key.toLowerCase())
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
      if (this.wordsRemaining <= 0) {
        alert('game over')
        this.isGameOn = false
      } else {
        this.playRandomWordSound()
      }
      this.userInput = ''

    }
  }

  onWrongSpelling() {
    alert('wrong')
  }

  handleLetter(letter: string) {
    if (letter === 'backspace') this.userInput = this.userInput.slice(0, this.userInput.length - 1)
    if (letter.length > 1) return
    this.userInput += letter
  }

}
