import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from '../../../utils/animations/fadeIn.animation';
import { ArtistasAPIService } from '../../../utils/api/artistas-api.service';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    MatIconModule
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.sass',
  animations: [
    fadeInAnimation
  ]
})
export class ShowComponent {
  id : string|number = '';
  artista : any = {};
  theme : string = 'dark';

  constructor(private themeMode : ThemeModeService, private currentRoute : ActivatedRoute, private router : Router, private api : ArtistasAPIService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });

    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.artista = this.api.getArtistaById(this.id);
  }

  navigateBack() {
    this.router.navigate(['/catalogo']);
  }

}
