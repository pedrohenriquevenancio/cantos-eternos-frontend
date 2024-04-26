import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { imgCardEffect } from '../../utils/animations/imgCardEffect.animation';

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
  public artistas = [
    {
      id: 1,
      nome: '',
      src: './assets/1.png'
    },
    {
      id: 2,
      nome: '',
      src: './assets/2.png'
    },
    {
      id: 3,
      nome: '',
      src: './assets/3.png'
    },
    {
      id: 4,
      nome: '',
      src: './assets/4.png'
    },
    {
      id: 5,
      nome: '',
      src: './assets/5.png'
    },
    {
      id: 6,
      nome: '',
      src: './assets/6.png'
    },
    {
      id: 7,
      nome: '',
      src: './assets/7.png'
    },
    {
      id: 8,
      nome: '',
      src: './assets/8.png'
    },
    {
      id: 9,
      nome: '',
      src: './assets/9.png'
    },
    {
      id: 10,
      nome: '',
      src: './assets/10.png'
    },
    {
      id: 11,
      nome: '',
      src: './assets/11.png'
    },
    {
      id: 12,
      nome: '',
      src: './assets/12.png'
    },
    {
      id: 13,
      nome: '',
      src: './assets/13.png'
    },
    {
      id: 14,
      nome: '',
      src: './assets/14.png'
    },
    {
      id: 15,
      nome: '',
      src: './assets/15.png'
    },
    {
      id: 16,
      nome: '',
      src: './assets/16.png'
    },
  ];

  constructor() {
  }

}
