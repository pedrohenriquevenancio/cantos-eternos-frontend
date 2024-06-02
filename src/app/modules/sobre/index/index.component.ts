import { Component } from '@angular/core';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';
import { NgClass, NgIf } from '@angular/common';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FooterComponent,
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
