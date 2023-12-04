import { Component } from '@angular/core';
import { LogoComponent } from '../../shared/logo/logo.component';
import { PokeListComponent } from '../../shared/poke-list/poke-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [LogoComponent, PokeListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
