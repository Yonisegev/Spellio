import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LetterData } from '../models/letter-data';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private utilService: UtilService) { }

  private _clickedLetter$: BehaviorSubject<LetterData> = new BehaviorSubject({ letter: '', origin: '' })
  public clickedLetter$: Observable<LetterData> = this._clickedLetter$.asObservable()
  private _currUser$: BehaviorSubject<any> = new BehaviorSubject(this.getUserFromStorage())
  public currUser$: Observable<any> = this._currUser$.asObservable()

  public setClickedLetter(letterData: LetterData): void {
    this._clickedLetter$.next(letterData)
  }

  public setCurrUsername(username: string) {
    this._currUser$.next(username)
    this.utilService.saveToStorage('user', username)
  }

  public calculateScore(startTime: number, endTime: number): number {
    const diff = endTime - startTime
    const diffInSeconds = +((diff % 60000) / 1000).toFixed(0)
    switch (true) {
      case (diffInSeconds === 0):
        return -100
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
  private getUserFromStorage() {
    let user = this.utilService.loadFromStorage('user')
    if (!user) return ''
    return user
  }
}

