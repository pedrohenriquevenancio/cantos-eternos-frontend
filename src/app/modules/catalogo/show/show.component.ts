import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { Component, ElementRef } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { ActivatedRoute, Router } from '@angular/router';
import { FooterComponent } from '../../../components/footer/footer.component';
import { fadeInAnimation } from '../../../utils/animations/fadeIn.animation';
import { imgCardEffect } from '../../../utils/animations/imgCardEffect.animation';
import { ArtistasAPIService } from '../../../utils/api/artistas-api.service';
import { ScrollService } from '../../../utils/services/scroll.service';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';

@Component({
  selector: 'app-show',
  standalone: true,
  imports: [
    NgClass,
    NgStyle,
    NgIf,
    NgFor,
    MatIconModule,
    FooterComponent
  ],
  templateUrl: './show.component.html',
  styleUrl: './show.component.sass',
  animations: [
    fadeInAnimation,
    imgCardEffect
  ],
  providers: [ScrollService]
})
export class ShowComponent {
  id : string|number = '';
  artista : any = {};
  theme : string = 'dark';
  selectedImage ?: string;
  loadedImage : boolean = false;
  loading : boolean = true;

  constructor(private themeMode : ThemeModeService, private currentRoute : ActivatedRoute, private router : Router, private api : ArtistasAPIService, private elRef: ElementRef) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });

    this.currentRoute.params.subscribe(params => {
      this.id = params['id'];
    });

    this.api.getArtistaById(this.id)
    .then((artista) => {
      this.artista = artista;
      this.loading = false;
    })
    .catch((err) => console.log(err));
  }

  navigateBack() {
    this.router.navigate(['/catalogo']);
  }

  setLoadedImage() {
    this.loadedImage = true;
  }

  scrollTo(id:string) {
    const element = this.elRef.nativeElement.querySelector(`#${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

}
