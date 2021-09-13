import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'keyboard',
  templateUrl: './keyboard.component.html',
  styleUrls: ['./keyboard.component.scss']
})
export class KeyboardComponent implements OnInit {

  constructor(private gameService: GameService) { }
  sub: Subscription | undefined
  ngOnInit(): void {
    this.gameService.clickedLetter$.subscribe(letter => {
    })
  }

  

}
