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
  // Variáveis do componente.
  private setAllPokemons: any;
  protected getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  // Recebendo os dados da api quando o componente é inicializado.
  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => (
        (this.setAllPokemons = res.results),
        (this.getAllPokemons = this.setAllPokemons)
      )
    );
  }

  // Mẃtodo executado para fazer a filtragem dos pokemons.
  protected getNamePoke(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
