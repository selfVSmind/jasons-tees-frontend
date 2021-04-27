import { HttpClient } from '@angular/common/http';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { CncCutFile, HtvOption, TShirtBlank } from '../../../database.service';

@Component({
  selector: 'app-colors-card',
  templateUrl: './colors-card.component.html',
  styleUrls: ['./colors-card.component.scss']
})
export class ColorsCardComponent implements OnInit, OnChanges {

  @Input() tShirtBlanks: Array<TShirtBlank>;
  @Input() htvOptions: Array<HtvOption>;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnChanges(changes) {
    if(changes['selectedCncCutFile']) {
      // deal with asynchronous Observable result
      this.selectedCncCutFile = changes.selectedCncCutFile.currentValue;
      console.log(JSON.stringify(changes, null, 2));
    }
  }

  selectedBlankId: string;
  selectedHtvId: string;
  @Input() selectedCncCutFile: CncCutFile;
  mockupImageUrl: any;

  newBlankSelection(selectedBlankId) {
    this.selectedBlankId = selectedBlankId;
    if(this.selectedHtvId) this.updateMockupImage();
  }

  newHtvSelection(htvId) {
    this.selectedHtvId = htvId;
    if(this.selectedBlankId) this.updateMockupImage();
  }

  getMockupUrl = "https://t-shirts.jasonlambert.io/getMockupWithColor";

  private updateMockupImage() {
    if(this.selectedCncCutFile) {
      this.http.post<any>(this.getMockupUrl, { tShirtModelId: this.selectedBlankId, vinylModelId: this.selectedHtvId, cncCutFileId: this.selectedCncCutFile.id }).toPromise()
      .then(response => { // this should be the url to the newly created image
        console.log(JSON.stringify(response, null, 2));
        this.mockupImageUrl = response;
      })
    }
  }

}
