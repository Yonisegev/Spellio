import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LetterData } from '../models/letter-data';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  private _clickedLetter$: BehaviorSubject<LetterData> = new BehaviorSubject({ letter: '', origin: '' })
  public clickedLetter$: Observable<LetterData> = this._clickedLetter$.asObservable()

  public setClickedLetter(letterData: LetterData): void {
    this._clickedLetter$.next(letterData)
  }

  public calculateScore(startTime: number, endTime: number): number {
    const diff = endTime - startTime
    const diffInSeconds = +((diff % 60000) / 1000).toFixed(0)
    switch (true) {
      case (diffInSeconds <= 2):
        return 500
      case (diffInSeconds <= 5):
        return 350
      case (diffInSeconds > 5):
        return 100
      default:
        return 0
    }


  }
}
