import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { GameService } from 'src/app/services/game.service';

@Component({
  selector: 'settings-selection',
  templateUrl: './settings-selection.component.html',
  styleUrls: ['./settings-selection.component.scss']
})
export class SettingsSelectionComponent implements OnInit, OnDestroy {

  constructor(private gameService: GameService) { }
  @Output() onLevelSelected = new EventEmitter<string>()
  levelDescription: string = ''
  currHoveredLevel: string = ''
  username: string = ''
  currUserSub: Subscription | undefined
  ngOnInit(): void {
    this.currUserSub = this.gameService.currUser$.subscribe(user => this.username = user)
  }

  ngOnDestroy() {
    this.currUserSub?.unsubscribe()
  }

  onSaveUsername(username: string) {
    this.gameService.setCurrUsername(username)
  }

  onLevelSelect(difficulty: string) {
    console.log(difficulty)
    if (!this.username) return
    this.onLevelSelected.emit(difficulty)
  }

  setLevelDescription(level: string) {
    if (level === 'easy') {
      this.levelDescription = 'Spell 3 words'
      this.currHoveredLevel = 'easy'
    } else if (level === 'medium') {
      this.levelDescription = 'Spell 5 words'
      this.currHoveredLevel = 'medium'
    } else if (level === 'hard') {
      this.levelDescription = 'Spell 10 words'
      this.currHoveredLevel = 'hard'
    } else {
      this.levelDescription = ''
      this.currHoveredLevel = ''
    }
  }


}
