import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeapiService } from './pokeapi.service';
import { PokedexComponent } from './pokedex/pokedex.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, PokedexComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title = 'datosex';

  //implementamos el servicio con l constructor
  constructor (private PokeApi: PokeapiService){}

  //implementamos el OnInit y con la variable PokeApi que recibe los servicios
  //iniciamos el metodo getPokemon()
  ngOnInit(): void {
    //aqui estamos enviando el limite a traves del numero 100
    this.PokeApi.getPokemon(100)
  }

}
