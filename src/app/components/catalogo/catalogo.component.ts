import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { imgCardEffect } from '../../utils/animations/imgCardEffect.animation';
import { Router } from '@angular/router';
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

  constructor(private router : Router, private api : ArtistasAPIService) {
    this.artistas = this.api.getArtistas();
  }


  show(id:string|number) {
    this.router.navigate(['catalogo/visualizar/', id]);
  }

}
