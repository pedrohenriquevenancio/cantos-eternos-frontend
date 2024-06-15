import { Component } from '@angular/core';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';
import { NgClass, NgIf } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';
import { fadeInAnimation } from '../../../utils/animations/fadeIn.animation';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FooterComponent,
  ],
  animations: [
    fadeInAnimation
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
  public theme = 'dark';

  constructor(private themeMode : ThemeModeService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });

  }

}
