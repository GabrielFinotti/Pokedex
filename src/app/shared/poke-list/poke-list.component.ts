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
  private setAllPokemons: any;
  protected getAllPokemons: any;

  constructor(private pokeApiService: PokeApiService) {}

  ngOnInit(): void {
    this.pokeApiService.apiListAllPokemons.subscribe(
      (res) => (
        (this.setAllPokemons = res.results),
        (this.getAllPokemons = this.setAllPokemons),
        console.log(res)
      )
    );
  }

  protected getNamePoke(value: string) {
    const filter = this.setAllPokemons.filter((res: any) => {
      return !res.name.indexOf(value.toLocaleLowerCase());
    });

    this.getAllPokemons = filter;
  }
}
