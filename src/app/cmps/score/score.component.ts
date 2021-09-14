import { Component, OnInit } from '@angular/core';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent {

  constructor(private gameService: GameService) { }
  score: number = 0
  animatedScore: number | null = null


  updateScore(action: string, guessStartTime: number | null) {
    let scoreToAdd: number = 0
    let guessEndTime = Date.now()
    if (action === 'add') {
      if (!guessStartTime) return
      scoreToAdd = this.gameService.calculateScore(guessStartTime, guessEndTime)
    } else if (action === 'lower') {
      scoreToAdd = this.gameService.calculateScore(null, null)
    }
    this.animatedScore = scoreToAdd
    setTimeout(() => {
      this.animatedScore = null
    }, 750)
    this.score += scoreToAdd
  }

  get scoreValue(): number {
    return this.score
  }
}
