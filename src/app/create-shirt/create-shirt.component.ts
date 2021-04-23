import { Component } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';

@Component({
  selector: 'app-create-shirt',
  templateUrl: './create-shirt.component.html',
  styleUrls: ['./create-shirt.component.scss']
})
export class CreateShirtComponent {
  /** Based on the screen size, switch from standard to one column per row */
  rowHeight = "350px";
  numColumns = "18";
  cards = this.breakpointObserver.observe('(max-width: 960px)').pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Custom Graphic', cols: 18, rows: 2 },
          { title: 'Demographic', cols: 18, rows: 1 },
          { title: 'Specifications', cols: 18, rows: 2 },
          { title: 'Colors', cols: 18, rows: 2 }
          ];
      }

      return [
        { title: 'Custom Graphic', cols: 4, rows: 2 },
        { title: 'Demographic', cols: 4, rows: 2 },
        { title: 'Specifications', cols: 10, rows: 2 },
        { title: 'Colors', cols: 9, rows: 2 },
        { title: 'Colors', cols: 9, rows: 2 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver) {}
}
