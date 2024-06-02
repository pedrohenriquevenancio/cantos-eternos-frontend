import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  private themeSubject : BehaviorSubject<string> = new BehaviorSubject<string>('dark');
  public theme$ : Observable<string> = this.themeSubject.asObservable();

  constructor() {
    if (typeof window !== 'undefined' && localStorage.getItem('theme')) {
      this.themeSubject.next(localStorage.getItem('theme') as string);
    }
  }

  getThemeMode () {
    return this.theme$;
  }

  setThemeMode (theme : string) {
    if (typeof window !== 'undefined') {
      localStorage.setItem('theme', theme);
    }
    this.themeSubject.next(theme);
  }

}
