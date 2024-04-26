import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FooterComponent } from '../../../components/footer/footer.component';
import { fadeInAnimation } from '../../../utils/animations/fadeIn.animation';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    FooterComponent,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass',
  animations: [fadeInAnimation]
})
export class IndexComponent {
  public theme : string = 'dark';

  constructor(private themeMode : ThemeModeService, private router : Router) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
