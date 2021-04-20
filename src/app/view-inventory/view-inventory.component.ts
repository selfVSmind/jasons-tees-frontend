import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';

interface TShirtBlank {
  id: string,
  name: string,
  frontPic: {url: string, id: string},
  backPic: {url: string, id: string},
  color: string,
  countS: string,
  countM: string,
  countL: string,
  countXL: string,
  count2XL: string,
  count3XL: string,
  count4XL: string,
  count5XL: string,
  count6XL: string,
  count7XL: string,
  mockupOverlayGeometry: string,
  modelId: string
};

@Component({
  selector: 'app-view-inventory',
  templateUrl: './view-inventory.component.html',
  styleUrls: ['./view-inventory.component.scss']
})
export class ViewInventoryComponent implements OnInit {
  currentBlank: TShirtBlank;
  tShirtBlanks: Array<TShirtBlank>;
  imageWidth = 300;

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Front', cols: 1, rows: 2 },
          { title: 'Counts', cols: 1, rows: 1 },
          { title: 'Back', cols: 1, rows: 2 }
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

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
  .pipe(
    map(result => result.matches),
    shareReplay()
  );

  url = "https://t-shirts.jasonlambert.io/getTshirtBlankData";

  constructor(
    private breakpointObserver: BreakpointObserver,
    private http: HttpClient
  ) {
    this.http.get(this.url).toPromise()
    .then(jsonData => {
      console.log(JSON.stringify(jsonData, null, 2));
      if(jsonData.hasOwnProperty('data')) {
        this.tShirtBlanks = jsonData['data'];
        this.currentBlank = this.tShirtBlanks[0];
      }
    });
  }

  ngOnInit(): void {
  }

  newBlankSelection(selectedBlankId) {
    console.log(selectedBlankId);
    this.tShirtBlanks.forEach((blank) => {
      if(selectedBlankId === blank.id) {
        this.currentBlank = blank;
      }
    });
  }

}
