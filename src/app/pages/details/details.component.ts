import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

//Components
import { LogoComponent } from '../../shared/logo/logo.component';

// Service
import { PokeApiService } from '../../services/poke-api.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [LogoComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private urlPokemon!: string;
  private urlName!: string;

  constructor(
    private activedRouter: ActivatedRoute,
    private pokeApitService: PokeApiService
  ) {
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
    this.urlName = 'https://pokeapi.co/api/v2/pokemon-species';
  }

  ngOnInit(): void {
    this.pokemon;
  }

  get pokemon() {
    const id = this.activedRouter.snapshot.params['id'];
    const pokemon = this.pokeApitService.apiGetPokemon(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApitService.apiGetPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe((res) => {
      console.log(res);
    });
  }
}
