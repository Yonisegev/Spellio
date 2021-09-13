import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'ending-screen',
  templateUrl: './ending-screen.component.html',
  styleUrls: ['./ending-screen.component.scss']
})
export class EndingScreenComponent implements OnInit {

  constructor(private gameService: GameService) { }
  @Input() endingScore: number | undefined
  username: string | undefined
  usernameSub: Subscription | undefined
  ngOnInit(): void {
    this.usernameSub = this.gameService.currUser$.subscribe(username => this.username = username)
  }

}
