import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demographic-card',
  templateUrl: './demographic-card.component.html',
  styleUrls: ['./demographic-card.component.scss']
})
export class DemographicCardComponent implements OnInit {

  demoOptions: Array<string> = ["Male", "Female"];

  constructor() { }

  ngOnInit(): void {
  }

  selectionChanged(item) {
    console.log("Selected demographic: ", item.value);
  }

}
