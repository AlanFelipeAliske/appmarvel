import { Component, OnInit } from '@angular/core';
import { CharactersService } from 'src/app/core/services/characters.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html'
})
export class CharactersComponent implements OnInit {

  constructor(private charactersService: CharactersService) { }
  allCharacters: Observable<any> | undefined
  characters: Observable<any> | undefined

  ngOnInit() {
    this.getCharacters();
    this.filterCharacters();
  }

  getCharacters(){
    this.allCharacters = this.charactersService.getAllCharacters();
  }
  filterCharacters(){
    this.characters = this.charactersService.filterAllCharacters();
  }
}
