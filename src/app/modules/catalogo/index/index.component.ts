import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { CatalogoComponent } from '../../../components/catalogo/catalogo.component';
import { ThemeModeService } from '../../../utils/services/theme-mode.service';
import { FooterComponent } from '../../../components/footer/footer.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [
    MatInputModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    NgClass,
    NgIf,
    NgFor,
    CatalogoComponent,
    FooterComponent,
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.sass'
})
export class IndexComponent {
  public theme: string = 'dark';
  public music_genders: string[] = [
    'Rock',
    'Pop',
    'Rap',
    'Reggaeton',
    'Electronica',
    'Metal',
    'Indie',
    'Jazz',
    'Clasica',
    'Blues',
    'Salsa',
    'Sertanejo',
    'Reggae',
    'Punk',
    'Country',
    'Disco',
    'Hip Hop',
    'Folk',
    'Techno',
    'House',
    'Dubstep',
    'Trap',
  ];

  public selected_music_genders: string[] = [];

  constructor(private themeMode : ThemeModeService) {
    this.themeMode.getThemeMode().subscribe((theme) => {
      this.theme = theme;
    });
  }

  searchArtistas() {

  }

  setGenders(gender: string) {
    if (this.selected_music_genders.includes(gender)) {
      this.selected_music_genders = this.selected_music_genders.filter(c => c !== gender);
    } else {
      this.selected_music_genders.push(gender);
    }
  }

}
