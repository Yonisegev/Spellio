import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public saveToStorage(key: string, val: any) {
    const str = JSON.stringify(val);
    localStorage.setItem(key, str);
  }

  public loadFromStorage(key: string) {
    const str = localStorage.getItem(key);
    if (!str) return
    return JSON.parse(str);
  }
}
