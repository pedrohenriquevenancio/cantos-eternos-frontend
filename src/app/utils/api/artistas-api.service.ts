import { Injectable } from '@angular/core';
import axios from 'axios';
import { Artista } from '../types/Artista';
import { log } from 'console';
import { resolve } from 'path';

@Injectable({
  providedIn: 'root'
})
export class ArtistasAPIService {

  public artistas : Artista[] = [];

  public header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  // public api = 'http://localhost:3000';
  public api = 'https://cantos-eternos-api.vercel.app';

  constructor() { }

  getArtistas() : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(`${this.api}/artistas/`, { headers: this.header })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    })
  }

  getArtistaById(id: string|number) : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(`${this.api}/artistas/${id}`, { headers: this.header })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    });
  }
}
