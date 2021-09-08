import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map, retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class WordService {

  constructor(private http: HttpClient) { }
  public textToSpeech(txt: string) {
    let httpParams: HttpParams = new HttpParams()
      .set('text', txt)
    return this.http.get('//localhost:3030/api/tts', { params: httpParams, responseType: 'text' })
  }

  public getWordDefinition(word: string): Observable<any> {
    return this.http.get(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).
      pipe(
        map((data: any) => {
          const definition = data[0].meanings[0].definitions[0].definition
          if (!definition) return throwError('Couldn\'t get a hint for this word')
          return definition
        }),
        retry(1),
        catchError((err) => {
          return throwError('Couldn\'t get a hint for this word')
        })
      )
  }

  public getLevelWordsCount(level: string | undefined) {
    switch (level) {
      case 'easy':
        return 3
      case 'medium':
        return 5
      case 'hard':
        return 10
      default:
        return 3
    }
  }
}
