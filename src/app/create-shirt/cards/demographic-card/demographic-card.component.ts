import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-demographic-card',
  templateUrl: './demographic-card.component.html',
  styleUrls: ['./demographic-card.component.scss']
})
export class DemographicCardComponent {

  @Output("demographicChosen") demographicChosen: EventEmitter<string> = new EventEmitter();
  @Input() selectedDemographic: string;

  demoOptions: Array<string> = ["Male", "Female"];

  constructor() { }

  selectionChangedNotifyParent(demo) {
    this.demographicChosen.emit(demo);
  }

}
