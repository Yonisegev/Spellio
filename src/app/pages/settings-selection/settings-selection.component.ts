import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user';
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
  user: User | null | undefined
  currUserSub: Subscription | undefined
  ngOnInit(): void {
    this.currUserSub = this.gameService.currUser$.subscribe(user => this.user = user)
  }

  ngOnDestroy() {
    this.currUserSub?.unsubscribe()
  }

  onSaveUsername(username: string) {
    if (!username) return
    this.gameService.setCurrUsername(username)
  }

  onLevelSelect(difficulty: string) {
    if (!this.user) return
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
