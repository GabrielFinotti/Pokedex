import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { forkJoin } from 'rxjs';

//Components
import { LogoComponent } from '../../shared/logo/logo.component';

// Service
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [RouterModule, LogoComponent],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss',
})
export class DetailsComponent implements OnInit {
  private urlPokemon!: string;
  private urlName!: string;
  protected pokemon!: any;
  protected isLoading!: boolean;

  constructor(
    private activedRouter: ActivatedRoute,
    private pokeApitService: PokeApiService
  ) {
    this.urlPokemon = 'https://pokeapi.co/api/v2/pokemon';
    this.urlName = 'https://pokeapi.co/api/v2/pokemon-species';
    this.isLoading = false;
  }

  ngOnInit(): void {
    this.getPokemon;
  }

  get getPokemon() {
    const id = this.activedRouter.snapshot.params['id'];
    const pokemon = this.pokeApitService.apiGetPokemon(
      `${this.urlPokemon}/${id}`
    );
    const name = this.pokeApitService.apiGetPokemon(`${this.urlName}/${id}`);

    return forkJoin([pokemon, name]).subscribe((res) => {
      this.pokemon = res;
      this.isLoading = true;
    });
  }
}
