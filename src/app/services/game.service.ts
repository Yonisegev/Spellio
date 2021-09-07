import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LetterData } from '../models/letter-data';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private _clickedLetter$: BehaviorSubject<LetterData> = new BehaviorSubject({letter: '', origin: ''})
  public clickedLetter$: Observable<LetterData> = this._clickedLetter$.asObservable()

  public setClickedLetter(letterData: LetterData): void {
    this._clickedLetter$.next(letterData)
  }
}
