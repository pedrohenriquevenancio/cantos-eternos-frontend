import { NgClass, NgIf } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ThemeModeService } from '../../utils/services/theme-mode.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatButtonToggleModule,
    NgClass,
    NgIf
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.sass',
})
export class HeaderComponent {
  public theme : string = 'dark';

  constructor(public themeMode : ThemeModeService, private router: Router, private ref : ElementRef, private renderer : Renderer2) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
    this.ref.nativeElement.querySelector('#menuHeader').classList.remove('show');
    this.ref.nativeElement.querySelector('.offcanvas-backdrop').classList.remove('show');
  }

}
