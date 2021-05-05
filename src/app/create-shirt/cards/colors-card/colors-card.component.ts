import { BreakpointObserver } from '@angular/cdk/layout';
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
  mockupImageUrl: any;// = "assets/images/sampleShirtFront.jpg";

  constructor(
    private http: HttpClient,
    private breakpointObserver: BreakpointObserver
  ) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes['selectedCncCutFile']) {
      this.updateMockupImage();
    }
    if(changes['blankId']) {
      this.updateMockupImage();
    }
    if(changes['htvId']) {
      this.updateMockupImage();
    }
  }

  newBlankSelection(selectedBlankId) {
    this.tShirtBlankChosen.emit({ index: this.index, blankId: selectedBlankId });
    this.tShirtBlanks.forEach(blank => {if(blank.id == selectedBlankId) this.mockupImageUrl = blank.frontPic.url+"?fm=jpg&w=400"})
  }

  newHtvSelection(htvId) {
    this.htvChosen.emit({ index: this.index, htvId: htvId });
  }

  getMockupUrl = "https://t-shirts.jasonlambert.io/newGetMockupWithColor";

  loading = false;

  private updateMockupImage() {
    if(this.selectedCncCutFile && this.htvId && this.blankId) {
      this.loading = true;
      this.http.post<any>(this.getMockupUrl, { index: this.index, tShirtModelId: this.blankId, vinylModelId: this.htvId, cncCutFileId: this.selectedCncCutFile.id }).toPromise()
      .then(response => { // this should be the url to the newly created image
        // console.log(JSON.stringify(response, null, 2));
        if(response.hasOwnProperty('mockupUrl')) {
          this.mockupImageUrl = "https://t-shirts.jasonlambert.io/" + response.mockupUrl;
          this.loading = false;
        }
      })
    }
  }

}
