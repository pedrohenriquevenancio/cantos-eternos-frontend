import { Component } from '@angular/core';
import { ThemeModeService } from '../../utils/services/theme-mode.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.sass'
})
export class FooterComponent {
  public theme : string = '';

  constructor(private themeMode : ThemeModeService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }
}
