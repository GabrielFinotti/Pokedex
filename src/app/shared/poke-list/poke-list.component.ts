import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

// Components
import { PokeSearchComponent } from '../poke-search/poke-search.component';
// Services
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [RouterModule, PokeSearchComponent],
  templateUrl: './poke-list.component.html',
  styleUrl: './poke-list.component.scss',
})
export class PokeListComponent implements OnInit {
  protected getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => ((this.getAllPokemons = res.results), console.log(res))
    );
  }

  protected getNamePoke() {
    
  }
}
