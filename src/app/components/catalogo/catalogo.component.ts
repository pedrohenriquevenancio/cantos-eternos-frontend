import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { imgCardEffect } from '../../utils/animations/imgCardEffect.animation';
import { ArtistasAPIService } from '../../utils/api/artistas-api.service';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [
    NgClass,
    NgIf,
    NgFor,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.sass',
  animations: [
    imgCardEffect
  ]
})
export class CatalogoComponent {
  public value: string = '';
  public oldArtistas : any[] = [];
  public artistas : any[] = [];
  public imagesLoaded : number[] = [];

  constructor(private router : Router, private api : ArtistasAPIService) {
    this.api.getArtistas().then((artistas) => {
      this.artistas = artistas.filter((artista:any) => artista.sexo !== 'Teste');
      this.oldArtistas = this.artistas;
    }).catch((err) => {
      console.log(err);
    });
  }

  show(id:string|number) {
    this.router.navigate(['catalogo/visualizar/', id]);
  }

  searchArtistas() {
    if(this.value == '') {
      this.artistas = this.oldArtistas;
    } else {
      this.artistas = this.oldArtistas.filter((artista:any) => {
        return artista.nome.toLowerCase().includes(this.value.toLowerCase());
      });
    }
  }

}
