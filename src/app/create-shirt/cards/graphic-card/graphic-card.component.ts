import { BreakpointObserver, Breakpoints, BreakpointState } from '@angular/cdk/layout';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { CncCutFile } from 'src/app/database.service';
import { GraphicCardDialogComponent } from './graphic-card-dialog/graphic-card-dialog.component';

@Component({
  selector: 'app-graphic-card',
  templateUrl: './graphic-card.component.html',
  styleUrls: ['./graphic-card.component.scss']
})
export class GraphicCardComponent {

  isXSmall: Observable<BreakpointState> = this.breakpointObserver.observe(Breakpoints.XSmall);
  @Output("graphicChosen") graphicChosen: EventEmitter<CncCutFile> = new EventEmitter();
  @Input() selectedGraphic: CncCutFile;
  
  constructor(
    public dialog: MatDialog,
    private breakpointObserver: BreakpointObserver
  ) {}

  graphicChosenNotifyParent(graphicId) {
    this.graphicChosen.emit(graphicId);
  }

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
        dialogRef.updateSize('85%', '85%');
      } else {
        dialogRef.updateSize('75%', '75%');
      }
    })
    
    dialogRef.afterClosed().subscribe(cutFile => {
      smallDialogSubscription.unsubscribe();
      this.graphicChosenNotifyParent(cutFile);
    });
  };

}
