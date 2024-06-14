import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class GenerosMusicaisAPIService {
  public generos: string[] = [];

  public api = 'https://cantos-eternos-api.vercel.app';

  public header = {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  };

  constructor() { }

  getGenerosMusicais() : Promise<any> {
    return new Promise((resolve, reject) => {
      axios.get(`${this.api}/generos-musicais/`, { headers: this.header })
      .then((response) => {
        resolve(response.data);
      })
      .catch((err) => {
        reject(err);
      });
    })
  }
}
