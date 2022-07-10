import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
})
export class CharacterComponent implements OnInit {
  
  @Input() character: any;

  constructor() { }

  ngOnInit() {
  }

}
