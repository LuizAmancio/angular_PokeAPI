import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import {PokemonData} from '../models/pokemonData' // tipagem
import {NamePokemon} from '../models/pokemonData' // tipagem
import { Observable } from 'rxjs'; // um "canal" que pra entrar precisa se inscrever

@Injectable({
  providedIn: 'root'
})
export class PokemonServiceService {
  private baseURL?:string
  private pokeData:PokemonData|any // vai usar a tipagem do pokemonData
  private pokeNome:NamePokemon|any


  constructor( private http:HttpClient ) { 
     this.baseURL = 'https://pokeapi.co/api/v2/pokemon/' // recuperando url na service
  }

  getPokemon(pokemonName:string):Observable<PokemonData>{
    this.pokeData = this.
                    http
                    .get<PokemonData>(`${this.baseURL}${pokemonName}` ) // recuperando requisição http
    return this.pokeData 
  }

  getFull(limit:string):Observable<NamePokemon>{
    this.pokeNome = this.
                    http
                    .get<NamePokemon>(`${this.baseURL}${limit}` ) // recuperando requisição http
    return this.pokeNome 
  }

}
