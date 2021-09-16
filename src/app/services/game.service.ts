import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { LetterData } from '../models/letter-data';
import { UtilService } from './util.service';
import { v4 as uuid } from 'uuid'
import { User } from '../models/user';
import { environment } from 'src/environments/environment'
import { LeaderboardUser } from '../models/leaderboard-user';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private utilService: UtilService, private http: HttpClient) { }

  private _clickedLetter$: BehaviorSubject<LetterData> = new BehaviorSubject({ letter: '', origin: '' })
  public clickedLetter$: Observable<LetterData> = this._clickedLetter$.asObservable()
  private _currUser$: BehaviorSubject<User | null> = new BehaviorSubject(this.getUserFromStorage())
  public currUser$: Observable<User | null> = this._currUser$.asObservable()

  public setClickedLetter(letterData: LetterData): void {
    this._clickedLetter$.next(letterData)
  }

  public setCurrUsername(username: string) {
    const user: User = {
      userId: uuid(),
      username,
    }
    this._currUser$.next(user)
    this.utilService.saveToStorage('user', user)
  }

  public calculateScore(startTime: number | null, endTime: number | null): number {
    if (!startTime || !endTime) {
      return -100
    }
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

  public getLeaderboardScores(level = 'hard'): Observable<LeaderboardUser[]> {
    const httpParams: HttpParams = new HttpParams()
      .set('level', level)
    return this.http.get<LeaderboardUser[]>(environment.leaderboardsURL, { params: httpParams })
  }

  public updateLeaderboard(score: number, level: string): Observable<User> {
    let currUser = this._currUser$.value
    if (!currUser) {
      currUser = {
        userId: uuid(),
        username: 'Guest',

      }
    }
    const userWithScore = { ...currUser, score, level }
    return this.http.post<User>(environment.leaderboardsURL, userWithScore, { withCredentials: true })
  }

  private getUserFromStorage(): User | null {
    let user = this.utilService.loadFromStorage('user')
    if (!user) return null
    return user
  }
}

