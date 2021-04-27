import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { CncCutFile, DatabaseService } from '../database.service';

@Component({
  selector: 'app-create-shirt',
  templateUrl: './create-shirt.component.html',
  styleUrls: ['./create-shirt.component.scss']
})
export class CreateShirtComponent {

  selectedGraphic: CncCutFile;
  selectedDemographic: string;

  /** Based on the screen size, switch from standard to one column per row */
  rowHeight = "175px";
  numColumns = "18";
  cards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Custom Graphic', cols: 18, rows: 2 },
          { title: 'Demographic', cols: 18, rows: 1 },
          { title: 'Specifications', cols: 18, rows: 2 },
          { title: 'Colors', cols: 18, rows: 4 }
        ];
      }

      return [
        { title: 'Custom Graphic', cols: 4, rows: 2 },
        { title: 'Demographic', cols: 4, rows: 2 },
        { title: 'Specifications', cols: 10, rows: 2 },
        { title: 'Colors', cols: 6, rows: 2 },
        { title: 'Colors', cols: 6, rows: 2 },
        { title: 'Colors', cols: 6, rows: 2 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private databaseService: DatabaseService
  ) {}

  demographicChosen(demo) {
    this.selectedDemographic = demo;
    console.log("Selected Demographic: ", demo);
  }

  graphicChosen(graphic: CncCutFile) {
    this.selectedGraphic = graphic;
    console.log("Selected Graphic: ", graphic.name);
  }

  getTShirtBlanksForDemographic() {
    let availableBlanks = this.databaseService.getTShirtBlanks();
    return availableBlanks;
  }
}
