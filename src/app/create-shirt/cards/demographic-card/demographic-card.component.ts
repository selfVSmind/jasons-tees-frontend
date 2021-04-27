import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-demographic-card',
  templateUrl: './demographic-card.component.html',
  styleUrls: ['./demographic-card.component.scss']
})
export class DemographicCardComponent implements OnInit {

  @Output("demographicChosen") demographicChosen: EventEmitter<string> = new EventEmitter();

  demoOptions: Array<string> = ["Male", "Female"];

  constructor() { }

  ngOnInit(): void {
  }

  selectionChangedNotifyParent(demo) {
    this.demographicChosen.emit(demo);
  }

}
