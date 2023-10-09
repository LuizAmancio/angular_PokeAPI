import { Component } from '@angular/core';
import { NamePokemon, PokemonData } from 'src/app/models/pokemonData';
import { PokemonServiceService } from 'src/app/services/pokemon-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nome:NamePokemon
  title = 'services_ex';
  constructor(
    private service:PokemonServiceService // injetando service
  ){ 
    // inicializando objeto
   
    this.nome ={
      results:[]
    }
    
  }
  
  ngOnInit(): void {
    this.getFull('?offset=00&limit=50')
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
