import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { GraphicCardDialogComponent } from './graphic-card-dialog/graphic-card-dialog.component';

interface CncCutFile {
  id: string,
  name: string,
  imgUrl: string
};

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.scss']
})
export class GraphicCardComponent implements OnInit {

  isXSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);

  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  ngOnInit(): void {
  }

  cutFile: CncCutFile;

  openDialog(): void {
    let dialogRef = this.dialog.open(
      GraphicCardDialogComponent,
      {
        // width: '850px',
        // height: '650px',
        width: '75%',
        height: '75%',
        maxWidth: '100vw',
        maxHeight: '100vh'
      }
    );

    const smallDialogSubscription = this.isXSmall.subscribe(result => {
      if(result.matches) {
        // width, height
        dialogRef.updateSize('90%', '90%');
      } else {
        dialogRef.updateSize('75%', '75%');
      }
    })
    
    dialogRef.afterClosed().subscribe(cutFile => {
      smallDialogSubscription.unsubscribe();
      this.cutFile = cutFile;
      console.log(cutFile.name, "graphic has been selected.")
    });
  };

}
