import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';
import { TShirtBlank, DatabaseService } from '../database.service';

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {
  currentBlank: TShirtBlank;
  currentBlankPrices: Array<number>;
  tShirtBlanks: Array<TShirtBlank>;
  imageWidth = 300;

  /** Based on the screen size, switch from standard to one column per row */
  // cards = this.breakpointObserver.observe([
  //     Breakpoints.Handset,
  //     Breakpoints.Tablet
  //   ]).subscribe((state: BreakpointState) => {
  //     if (state.breakpoints[Breakpoints.Handset]) {
  //       return [
  //         { title: 'Counts', cols: 1, rows: 1 },
  //         { title: 'Front', cols: 1, rows: 2 },
  //         { title: 'Back', cols: 1, rows: 2 }
  //       ];
  //     }
  //     if (state.breakpoints[Breakpoints.Tablet]) {
  //       return [
  //         { title: 'Counts', cols: 1, rows: 1 },
  //         { title: 'Front', cols: 1, rows: 2 },
  //         { title: 'Back', cols: 1, rows: 2 }
  //       ];
  //     }
  //     return [
  //       { title: 'Front', cols: 2, rows: 2 },
  //       { title: 'Select', cols: 2, rows: 1 },
  //       { title: 'Counts', cols: 4, rows: 2 },
  //       { title: 'Back', cols: 1, rows: 1 },
  //       { title: 'Card 5', cols: 1, rows: 1 }
  //     ];
  //   });
  
  
  
  
  
  
  cards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Counts', cols: 8, rows: 1 },
          { title: 'Front', cols: 8, rows: 2 },
          { title: 'Back', cols: 8, rows: 2 }
        ];
      }

      return [
        { title: 'Front', cols: 2, rows: 2 },
        { title: 'Select', cols: 2, rows: 1 },
        { title: 'Counts', cols: 4, rows: 2 },
        { title: 'Back', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 1 }
      ];
    })
  );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private databaseService: DatabaseService
  ) {
    this.tShirtBlanks = databaseService.getTShirtBlanks();
    this.setBlank(this.tShirtBlanks[0]);
  }

  ngOnInit(): void {
  }

  private setBlank(blank) {
    this.currentBlank = blank;
    this.currentBlankPrices = [blank.countS, blank.countM, blank.countL, blank.countXL, blank.count2XL, blank.count3XL, blank.count4XL, blank.count5XL, blank.count6XL, blank.count7XL];
  }

  newBlankSelection(selectedBlankId) {
    // console.log(selectedBlankId);
    this.tShirtBlanks.forEach((blank) => {
      if(selectedBlankId === blank.id) {
        this.setBlank(blank);
      }
    });
  }

}
