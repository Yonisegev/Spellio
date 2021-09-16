import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LeaderboardUser } from 'src/app/models/leaderboard-user';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'leaderboards',
  templateUrl: './leaderboards.component.html',
  styleUrls: ['./leaderboards.component.scss']
})
export class LeaderboardsComponent implements OnInit {

  constructor(private gameService: GameService) { }
  leaderboardScores$: Observable<LeaderboardUser[]> | undefined
  selectedLvl: string = 'easy'
  ngOnInit(): void {
    this.onFetchLeaderboardScores()
  }

  onFetchLeaderboardScores(lvl: string = 'easy') {
    this.selectedLvl = lvl
    this.leaderboardScores$ = this.gameService.getLeaderboardScores(lvl)
  }

}
