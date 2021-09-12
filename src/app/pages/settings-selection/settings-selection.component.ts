import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'settings-selection',
  templateUrl: './settings-selection.component.html',
  styleUrls: ['./settings-selection.component.scss']
})
export class SettingsSelectionComponent implements OnInit {

  constructor() { }
  @Output() onLevelSelected = new EventEmitter<string>()
  levelDescription: string = ''
  currHoveredLevel: string = ''
  ngOnInit(): void {
  }

  onLevelSelect(difficulty: string) {
    console.log(difficulty)
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
