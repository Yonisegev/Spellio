import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {

  constructor(private gameService: GameService) { }
  score: number = 0
  animatedScore: number | null = null
  ngOnInit(): void {
  }


  addScore(guessStartTime: number | null) {
    if (!guessStartTime) return
    let guessEndTime = Date.now()
    const scoreToAdd: number = this.gameService.calculateScore(guessStartTime, guessEndTime)
    this.animatedScore = scoreToAdd
    setTimeout(() => {
      this.animatedScore = null
    }, 750)
    setTimeout(() => {
      this.score += scoreToAdd
    }, 850)
  }

  lowerScore() {
    this.animatedScore = -100
    setTimeout(() => {
      this.animatedScore = null
    }, 750)
    setTimeout(() => {
      this.score += -100
    }, 850)
  }

}
