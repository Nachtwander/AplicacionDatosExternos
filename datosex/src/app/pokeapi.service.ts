import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IPokemon } from './Interfaces/IPokemon';
import { Observable } from 'rxjs';
import { IPokemonDetalle } from './Interfaces/IPokemonDetalle';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlBase = "https://pokeapi.co/api/v2"

  constructor(private cliente: HttpClient) { }

  private httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json"})
  }

  //el parametro limite es opcional
  //es un observable de tipo IPokemon
  getPokemon(limit?: number): Observable<IPokemon>{
    //definimos la url que vamos a utilizar
    //(!limit) = si no tiene limite
      let url = (!limit) ? `${this.urlBase}/pokemon` : `${this.urlBase}/pokemon?limit=${limit}`

    //el cliente esta dfinido en el parametro del constructor
    //y tiene los elementos de HttpClient
    //el get va a ser de tipo IPokemon, esto permite que respuesta ahora tenga acceso a las referencias de la interfaz usando el . despues de respuesta
    // .subscribe(respuesta => console.log(respuesta.results.map(re => re.name))
    return this.cliente.get<IPokemon>(url, this.httpOptions)
  }

  getPokemonDetalle(url:string){
    return this.cliente.get<IPokemonDetalle>(url, this.httpOptions)
  }
}
