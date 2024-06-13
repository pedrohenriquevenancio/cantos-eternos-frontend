import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { ThemeModeService } from './utils/services/theme-mode.service';
import { NgClass } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';
import { ArtistasAPIService } from './utils/api/artistas-api.service';
import { ScrollService } from './scroll.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    NgClass,
    FooterComponent
  ],
  providers: [ScrollService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  public theme : string = '';

  constructor(private themeMode : ThemeModeService, private api : ArtistasAPIService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }
}
