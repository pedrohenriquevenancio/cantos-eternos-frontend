import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModeService } from './utils/services/theme-mode.service';
import { NgClass } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NgClass,
    FooterComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  public theme : string = '';

  constructor(private themeMode : ThemeModeService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }
}
