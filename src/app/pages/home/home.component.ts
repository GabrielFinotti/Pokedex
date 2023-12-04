import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { PokeSearchComponent } from '../../shared/poke-search/poke-search.component';
import { PokeListComponent } from '../../shared/poke-list/poke-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, PokeSearchComponent, PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
