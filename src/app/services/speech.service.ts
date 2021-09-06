import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SpeechService {

  constructor(private http: HttpClient) { }
  public textToSpeech(txt: string) {
    let httpParams: HttpParams = new HttpParams()
      .set('text', txt)
    return this.http.get('//localhost:3030/api/tts', { params: httpParams, responseType: 'text' })

  }
}
