import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { BreakpointObserver } from '@angular/cdk/layout';

interface CncCutFile {
  id: string,
  name: string,
  imgUrl: string
};

@Component({
  selector: 'app-graphic-card-dialog',
  templateUrl: './graphic-card-dialog.component.html',
  styleUrls: ['./graphic-card-dialog.component.scss']
})
export class GraphicCardDialogComponent implements OnInit {

  cutFiles: Array<CncCutFile>;
  selection: CncCutFile;
  url = "https://t-shirts.jasonlambert.io/getCncCutFileData";

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 960px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    public dialogRef: MatDialogRef<GraphicCardDialogComponent>,
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) {
    this.http.get(this.url).toPromise()
    .then(jsonData => {
      // console.log(JSON.stringify(jsonData, null, 2));
      if(jsonData.hasOwnProperty('data')) {
        this.cutFiles = jsonData['data'];
        this.cutFiles.forEach((cutFile) => {
          cutFile.imgUrl = 'https://t-shirts.jasonlambert.io/' + cutFile.imgUrl;
        })
      }
    });
  }

  ngOnInit(): void {
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  cardClick(cutFileId): void {
    this.cutFiles.forEach((file) => {
      if(file.id === cutFileId) {
        this.selection = file;
      }
    });
    this.dialogRef.close(this.selection);
  }

}
