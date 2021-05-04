import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';

@Component({
  selector: 'app-demographic-card',
  templateUrl: './demographic-card.component.html',
  styleUrls: ['./demographic-card.component.scss']
})
export class DemographicCardComponent implements OnChanges {

  @Output("demographicChosen") demographicChosen: EventEmitter<string> = new EventEmitter();
  @Input() selectedDemographic: string;

  demoOptions: Array<string> = ["Male", "Female"];

  constructor() { }

  ngOnChanges(changes) {
    if(changes['selectedDemographic']) {
      this.selectedDemographic = changes.selectedDemographic.currentValue;
    }
  }

  selectionChangedNotifyParent(demo) {
    this.demographicChosen.emit(demo);
  }

}
