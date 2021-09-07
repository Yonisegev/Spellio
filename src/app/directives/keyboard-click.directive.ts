import { Directive, ElementRef, HostListener } from '@angular/core';
import { GameService } from '../services/game.service';

@Directive({
  selector: '[keyboardClick]'
})
export class KeyboardClickDirective {
  timeoutId: any
  constructor(el: ElementRef, private gameService: GameService) {
    this.gameService.clickedLetter$.subscribe(letter => {
      const classes = Array.from(el.nativeElement.classList)
      if (classes[1] === letter) {
        el.nativeElement.classList.add('active')
        this.timeoutId = setTimeout(() => {
          el.nativeElement.classList.remove('active')
        }, 200)
      }
    })
  }

  @HostListener('click', ['$event.target'])
  onClick(elBtn: HTMLElement) {
    const letter: string = elBtn.classList[1]
    this.gameService.setClickedLetter({letter, origin: 'v-keyboard'})
  }






}
