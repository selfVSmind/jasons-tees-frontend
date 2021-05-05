import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { CncCutFile } from 'src/app/database.service';

@Component({
  selector: 'app-publish-card',
  templateUrl: './publish-card.component.html',
  styleUrls: ['./publish-card.component.scss']
})
export class PublishCardComponent {

  checkIfEbayConnectedUrl = 'https://t-shirts.jasonlambert.io/checkEbay';
  ebayConnected = false;

  @Input() getVariationOptionsArray: (args: any) => Array<{ index: number, blankId: string, htvId: string }>;
  @Input() selectedGraphic: CncCutFile;
  @Input() selectedDemographic: string;
  @Input() ebayTitle: string;
  @Input() ebayTheme: string;

  constructor(private http: HttpClient) {
    this.http.get(this.checkIfEbayConnectedUrl).toPromise()
    .then(jsonData => {
      if(jsonData.hasOwnProperty('ebayConnected')) {
        this.ebayConnected = jsonData['ebayConnected'];
      }
    });
  }

  publishToEbayUrl = "https://t-shirts.jasonlambert.io/newSaveDesign"

  readyToPublish() {
    return !(!this.selectedGraphic || !this.ebayTheme || !this.ebayTitle || this.getVariationOptionsArray.length <= 0);
  }

  buildPostBundle() {
    return {
      ebayTitle: this.ebayTitle,
      ebayTheme: this.ebayTheme,
      demographic: this.selectedDemographic,
      cncCutFile: this.selectedGraphic,
      variations: this.getVariationOptionsArray
    };
  }

  publishToEbay() {
    if(!this.readyToPublish) {
      console.log("nu uh");
      return;
    }

    this.http.post<any>(this.publishToEbayUrl, this.buildPostBundle()).toPromise()
    .then(response => {
      console.log(JSON.stringify(response, null, 2));
      if(response.hasOwnProperty('mockupUrl')) {
        // kablamey
      }
    })
  }
}
