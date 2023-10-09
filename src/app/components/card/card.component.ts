import { Component, OnInit, Input } from '@angular/core';
import { NamePokemon, PokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  pokemon:PokemonData
  nome:NamePokemon

  constructor(
    private service:PokemonServiceService // injetando service
  ){ 
    // inicializando objeto
    this.pokemon = {
      id:0,
      name:'',
      sprites:{front_default:''},
      types:[]
    }
    this.nome ={
      results:[]
    }
    
  }
  
  ngOnInit(): void {
    this.getPokemon('pikachu')
    this.getFull('?offset=00&limit=50')
  }

  @Input() getPokemon(searchName:string){ // método para pesquisar pokemon
    // subscribe -> inscrição no 'canal' Observable
    console.log(searchName)
    this.service.getPokemon(searchName).subscribe({
      next: (res) => {

        this.pokemon = {
          id: res.id,
          name: res.name,
          sprites: res.sprites,
          types: res.types
        }
       // console.log(this.pokemon)
      },
      error: (err) => console.log("not found")
    }) 
  }

  getFull(limit:string){ // método para resgatar apenas nome do pokemon
    // subscribe -> inscrição no 'canal' Observable
    this.service.getFull(limit).subscribe({
      next: (res) => {

        this.nome = {
          results: res.results
        }
        //console.log(this.nome)
      },
      error: (err) => console.log(err)
    }) 
  } 

  

}
