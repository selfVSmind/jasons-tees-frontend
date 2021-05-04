import { BreakpointState, Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { CncCutFile, HtvOption, TShirtBlank } from '../../../database.service';

@Component({
  selector: 'app-colors-card',
  templateUrl: './colors-card.component.html',
  styleUrls: ['./colors-card.component.scss']
})
export class ColorsCardComponent implements OnInit, OnChanges {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe('(max-width: 960px)')
    .pipe(
      map(result => result.matches),
      shareReplay()
    );


  @Output("tShirtBlankChosen") tShirtBlankChosen: EventEmitter<any> = new EventEmitter();
  @Output("htvChosen") htvChosen: EventEmitter<any> = new EventEmitter();
  @Input() tShirtBlanks: Array<TShirtBlank>;
  @Input() htvOptions: Array<HtvOption>;
  @Input() selectedCncCutFile: CncCutFile;
  @Input() index: number;
  @Input() blankId: string;
  @Input() htvId: string;
  // selectedBlankId: string;
  // selectedHtvId: string;
  mockupImageUrl: any;

  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes['selectedCncCutFile']) {
      this.selectedCncCutFile = changes.selectedCncCutFile.currentValue;
      this.updateMockupImage();
    }
    if(changes['blankId']) {
      this.blankId = changes.blankId.currentValue;
      this.updateMockupImage();
    }
    if(changes['htvId']) {
      this.htvId = changes.htvId.currentValue;
      this.updateMockupImage();
    }
    if(changes['index']) {
      this.index = changes.index.currentValue;
    }
  }

  newBlankSelection(selectedBlankId) {
    this.tShirtBlankChosen.emit({ index: this.index, blankId: selectedBlankId });
    // this.selectedBlankId = selectedBlankId;
    // this.updateMockupImage();
  }

  newHtvSelection(htvId) {
    this.htvChosen.emit({ index: this.index, htvId: htvId });
    // this.selectedHtvId = htvId;
    // this.updateMockupImage();
  }

  getMockupUrl = "https://t-shirts.jasonlambert.io/newGetMockupWithColor";

  private updateMockupImage() {
    if(this.selectedCncCutFile && this.htvId && this.blankId) {
      this.http.post<any>(this.getMockupUrl, { index: this.index, tShirtModelId: this.blankId, vinylModelId: this.htvId, cncCutFileId: this.selectedCncCutFile.id }).toPromise()
      .then(response => { // this should be the url to the newly created image
        // console.log(JSON.stringify(response, null, 2));
        if(response.hasOwnProperty('mockupUrl'))
          this.mockupImageUrl = "https://t-shirts.jasonlambert.io/" + response.mockupUrl;
      })
    }
  }

}
