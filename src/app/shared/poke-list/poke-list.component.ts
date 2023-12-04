import { Component, OnInit } from '@angular/core';

// Services
import { PokeApiService } from '../../services/poke-api.service';

@Component({
  selector: 'app-poke-list',
  standalone: true,
  imports: [],
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
}
