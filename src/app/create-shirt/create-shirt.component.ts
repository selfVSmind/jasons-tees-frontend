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

  usedIndex = 0;
  variationOptionsArray: Array<{ index: number, blankId: string, htvId: string }> = [];

  // colorsCards = [
  //   { title: 'Colors', cols: 6, rows: 5 }
  // ];
  
  cards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Custom Graphic', cols: 18, rows: 2 },
          { title: 'Specifications', cols: 18, rows: 2 },
          { title: 'Demographic', cols: 18, rows: 1 },
          { title: 'Publish', cols: 18, rows: 1 }
        ];
      }

      return [
        { title: 'Custom Graphic', cols: 4, rows: 2 },
        { title: 'Specifications', cols: 10, rows: 2 },
        { title: 'Demographic', cols: 4, rows: 1 },
        { title: 'Publish', cols: 4, rows: 1 }
      ];
    })
  );

  colorsCards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return { cols: 18, rows: 5, plusCols: 3, plusRows: 1 };
      }

      return { cols: 6, rows: 5, plusCols: 1, plusRows: 5 };
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private databaseService: DatabaseService
  ) {}

  demographicChosen(demo) {
    let oldDemo = this.selectedDemographic;
    this.selectedDemographic = demo;
    console.log("Selected Demographic: ", demo);

    // reset the color choices
    if(oldDemo && (oldDemo != demo)) {
      this.variationOptionsArray = [];
      this.usedIndex = 0;
    }

    if(this.variationOptionsArray.length < 1) this.addAnotherVariation();
  }

  graphicChosen(graphic: CncCutFile) {
    this.selectedGraphic = graphic;
    console.log("Selected Graphic: ", graphic.name);
  }

  // passed up from child: colors-card
  tShirtBlankChosen(parameters: { index: number, blankId: string }) {
    this.variationOptionsArray[parameters.index].blankId = parameters.blankId;
    console.log("Selected BlankId: ", parameters.blankId, " for Variation ", parameters.index, ".");
  }

  // passed up from child: colors-card
  htvChosen(parameters: { index: number, htvId: string }) {
    this.variationOptionsArray[parameters.index].htvId = parameters.htvId;
    console.log("Selected HtvId: ", parameters.htvId, " for Variation ", parameters.index, ".");
  }

  getTShirtBlanksForDemographic() {
    let availableBlanks = [...this.databaseService.getTShirtBlanks()];
    if(!this.selectedDemographic) return availableBlanks; // we should never arrive here but.. you know whatever
    for(let i = availableBlanks.length-1; i > -1; --i) {
      if(availableBlanks[i].model.demographic != this.selectedDemographic) availableBlanks.splice(i, 1);
    }
    return availableBlanks;
  }

  addAnotherVariation() {
    this.variationOptionsArray.push({ index: this.usedIndex++, blankId: "", htvId: "" });
    // this.colorsCards.push(this.colorsCards[0]);
  }
}
