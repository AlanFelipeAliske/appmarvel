import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html'
})
export class FilterComponent implements OnInit {

  @Output() onFilter: EventEmitter<string> = new EventEmitter();

  textFilter = '';

  constructor() { }

  ngOnInit() {
  }

  myFilter() {
    this.onFilter.emit(this.textFilter);

  }
}
