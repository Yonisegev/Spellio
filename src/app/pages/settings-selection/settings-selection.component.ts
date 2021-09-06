import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'settings-selection',
  templateUrl: './settings-selection.component.html',
  styleUrls: ['./settings-selection.component.scss']
})
export class SettingsSelectionComponent implements OnInit {

  constructor() { }
  @Output() onLevelSelected = new EventEmitter<string>()
  ngOnInit(): void {
  }

  onLevelSelect(difficulty: string) {
    console.log(difficulty)
    this.onLevelSelected.emit(difficulty)
  }
  

}
