import { Component , OnInit} from '@angular/core';
import { IPokemon } from '../Interfaces/IPokemon';
import { PokeapiService } from '../pokeapi.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PokemonComponent } from '../pokemon/pokemon.component';

@Component({
  selector: 'app-pokedex',
  standalone: true,
  imports: [CommonModule, FormsModule, PokemonComponent],
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{

  pokemon?: IPokemon
  cargando: boolean = true
  cantidad: number = 5

  constructor(private pokeApi : PokeapiService){

  }

  ngOnInit(): void {
    this.cargarPokemon()
  }


  cargarPokemon(){
    this.cargando=true
    this.pokeApi.getPokemon(this.cantidad).subscribe(pokemon =>{
      this.pokemon = pokemon
      this.cargando = false
    })
  }
}
