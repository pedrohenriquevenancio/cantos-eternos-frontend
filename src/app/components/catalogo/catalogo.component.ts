import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { imgCardEffect } from '../../utils/animations/imgCardEffect.animation';
import { ArtistasAPIService } from '../../utils/api/artistas-api.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.sass',
  animations: [
    imgCardEffect
  ]
})
export class CatalogoComponent {
  public artistas : any[] = [];
  public imagesLoaded : number[] = [];

  constructor(private router : Router, private api : ArtistasAPIService) {
    this.api.getArtistas().then((artistas) => {
      this.artistas = artistas;
    }).catch((err) => {
      console.log(err);
    });
  }

  show(id:string|number) {
    this.router.navigate(['catalogo/visualizar/', id]);
  }

}
