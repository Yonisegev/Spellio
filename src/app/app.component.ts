import { Component, OnInit, ViewChild } from '@angular/core';
import { SpeechService } from './services/speech.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private speechService: SpeechService) { }
  title = 'spellio';
  audio: HTMLAudioElement | null = null

  ngOnInit() {
  }


  onButtonClick() {
    this.speechService.textToSpeech('testing')
      .subscribe(res => {
        
        this.audio = new Audio(`//localhost:3030/audio/testing.mp3`)
        this.audio.play()
      })
  }


}
