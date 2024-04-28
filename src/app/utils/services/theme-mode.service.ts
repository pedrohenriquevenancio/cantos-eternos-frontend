import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeModeService {
  private themeSubject : BehaviorSubject<string> = new BehaviorSubject<string>('dark');
  public theme$ : Observable<string> = this.themeSubject.asObservable();

  constructor() { }

  getThemeMode () {
    return this.theme$;
  }

  setThemeMode (theme : string) {
    this.themeSubject.next(theme);
  }

}
