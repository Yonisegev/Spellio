import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() { }
  levelSelected: string = ''
  ngOnInit() {

  }
  
  onSetLevel(difficulty: string) {
    this.levelSelected = difficulty
  }


}
