import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }
  
  public paginaAtual = 1;
  public labels: any = {
    previousLabel: '⯇',
    nextLabel: '⯈'
  };

  allCharacters: any
  characters: any

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters(){  
    this.charactersService.getAllCharacters().subscribe((res) => {this.allCharacters = res; console.log(res);});
  }

  filter(filter: string){
    if (filter){
      this.charactersService.getFilterCharacters(filter, 0).subscribe((res) => {this.allCharacters = res; console.log(res);});
    } else {
      this.getCharacters();
    }
  }

}
