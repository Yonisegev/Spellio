import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'ending-screen',
  templateUrl: './ending-screen.component.html',
  styleUrls: ['./ending-screen.component.scss']
})
export class EndingScreenComponent implements OnInit {

  constructor(private gameService: GameService) { }
  @Input() endingScore: number | undefined
  user$: Observable<User> | undefined
  
  ngOnInit(): void {
    this.user$= this.gameService.currUser$
  }

}
