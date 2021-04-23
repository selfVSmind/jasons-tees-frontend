import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
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

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
  }

  cutFile: CncCutFile;

  openDialog(): void {
    let dialogRef = this.dialog.open(
      GraphicCardDialogComponent,
      {
        width: '850px',
        height: '650px',
      });

    dialogRef.afterClosed().subscribe(cutFile => {
      this.cutFile = cutFile;
      console.log(cutFile.name, "graphic has been selected.")
    });
  };

}
