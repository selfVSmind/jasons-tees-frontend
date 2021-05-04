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
  rowHeight = "25px";
  numColumns = "24";

  usedIndex = 0;
  variationOptionsArray: Array<{ index: number, blankId: string, htvId: string }> = [];

  // colorsCards = [
  //   { title: 'Colors', cols: 6, rows: 5 }
  // ];
  
  cards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Custom Graphic', cols: 24, rows: 14 },
          { title: 'Specifications', cols: 24, rows: 10 },
          { title: 'Demographic', cols: 24, rows: 7 },
          { title: 'Publish', cols: 24, rows: 7 }
        ];
      }

      return [
        { title: 'Custom Graphic', cols: 8, rows: 14 },
        { title: 'Specifications', cols: 10, rows: 14 },
        { title: 'Demographic', cols: 6, rows: 7 },
        { title: 'Publish', cols: 6, rows: 7 }
      ];
    })
  );

  colorsCards = this.breakpointObserver.observe(['(max-width:570px)', '(max-width: 770px)', '(max-width: 960px)', '(max-width: 1200px)', '(max-width: 1400px)', '(max-width: 1600px)']).pipe(
    map((results) => {
      if(results.breakpoints['(max-width:570px)']) {
        return { cols: 24, rows: 27, plusCols: 4 };
      }

      if(results.breakpoints['(max-width: 770px)']) {
        return { cols: 24, rows: 33, plusCols: 3 };
      }

      if(results.breakpoints['(max-width: 960px)']) {
        return { cols: 12, rows: 25, plusCols: 3 };
      }

      if(results.breakpoints['(max-width: 1200px)']) {
        return { cols: 8, rows: 19, plusCols: 3 };
      }

      if(results.breakpoints['(max-width: 1400px)']) {
        return { cols: 8, rows: 22, plusCols: 2 };
      }

      if(results.breakpoints['(max-width: 1600px)']) {
        return { cols: 6, rows: 21, plusCols: 2 };
      }

      return { cols: 6, rows: 24, plusCols: 2 };
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
  }

  // passed up from child: colors-card
  htvChosen(parameters: { index: number, htvId: string }) {
    this.variationOptionsArray[parameters.index].htvId = parameters.htvId;
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

  actuallyDeleteVariation(index) {
    this.variationOptionsArray.splice(index, 1);
    this.usedIndex--;
    for(let i = 0; i < this.variationOptionsArray.length; ++i) {
      this.variationOptionsArray[i].index = i;
    }    
  }

  deleteVariation(index) {
    if(this.variationOptionsArray.length > 1) this.actuallyDeleteVariation(index);
  }
}
