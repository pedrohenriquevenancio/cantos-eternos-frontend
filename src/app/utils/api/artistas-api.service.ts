import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ArtistasAPIService {

  public artistas = [
    {
      id: 1,
      nome: '',
      src: './assets/1.png',
      color: '#38B6FF'
    },
    {
      id: 2,
      nome: '',
      src: './assets/2.png',
      color: '#FF5757'
    },
    {
      id: 3,
      nome: '',
      src: './assets/3.png',
      color: '#FFB000'
    },
    {
      id: 4,
      nome: '',
      src: './assets/4.png',
      color: '#38B6FF'
    },
    {
      id: 5,
      nome: '',
      src: './assets/5.png',
      color: '#FF5757'
    },
    {
      id: 6,
      nome: '',
      src: './assets/6.png',
      color: '#FFB000'
    },
    {
      id: 7,
      nome: '',
      src: './assets/7.png',
      color: '#38B6FF'
    },
    {
      id: 8,
      nome: '',
      src: './assets/8.png',
      color: '#FF5757'
    },
    {
      id: 9,
      nome: '',
      src: './assets/9.png',
      color: '#FFB000'
    },
    {
      id: 10,
      nome: '',
      src: './assets/10.png',
      color: '#38B6FF'
    },
    {
      id: 11,
      nome: '',
      src: './assets/11.png',
      color: '#FF5757'
    },
    {
      id: 12,
      nome: '',
      src: './assets/12.png',
      color: '#FFB000'
    },
    {
      id: 13,
      nome: '',
      src: './assets/13.png',
      color: '#38B6FF'
    },
    {
      id: 14,
      nome: '',
      src: './assets/14.png',
      color: '#FF5757'
    },
    {
      id: 15,
      nome: '',
      src: './assets/15.png',
      color: '#FFB000'
    },
    {
      id: 16,
      nome: '',
      src: './assets/16.png',
      color: '#38B6FF'
    },
  ];

  constructor() { }

  getArtistas() {
    return this.artistas;
  }

  getArtistaById(id: string|number) {
    return this.artistas.find(artista => artista.id == id);
  }
}
