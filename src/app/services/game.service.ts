import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private _clickedLetter$: BehaviorSubject<string> = new BehaviorSubject('')
  public clickedLetter$: Observable<string> = this._clickedLetter$.asObservable()

  public setClickedLetter(letter: string): void {
    this._clickedLetter$.next(letter)
  }
}
