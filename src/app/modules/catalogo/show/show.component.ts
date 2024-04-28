import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef, Renderer2 } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { fadeInAnimation } from '../../../utils/animations/fadeIn.animation';
import { ArtistasAPIService } from '../../../utils/api/artistas-api.service';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';
import { imgCardEffect } from '../../../utils/animations/imgCardEffect.animation';

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
    fadeInAnimation,
    imgCardEffect
  ]
})
export class ShowComponent {
  id : string|number = '';
  artista : any = {};
  theme : string = 'dark';
  selectedImage ?: string;

  constructor(private themeMode : ThemeModeService, private currentRoute : ActivatedRoute, private router : Router, private api : ArtistasAPIService, private elRef: ElementRef) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });

    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
    });
    this.artista = this.api.getArtistaById(this.id);

    this.scrollTo('top');
  }

  navigateBack() {
    this.router.navigate(['/catalogo']);
  }

  scrollTo(id:string) {
    const element = this.elRef.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
