import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private tShirtBlanks: Array<TShirtBlank>;
  private cncCutFiles: Array<CncCutFile>;
  private htvOptions: Array<HtvOption>;
  // private cncCutFilesSource = new BehaviorSubject<Array<CncCutFile>>();
  // cncCutFiles = this.cncCutFilesSource.asObservable();

  tShirtBlanksUrl = "https://t-shirts.jasonlambert.io/getTshirtBlankData";
  cncCutFilesUrl = "https://t-shirts.jasonlambert.io/getCncCutFileData";
  htvOptionsUrl = "https://t-shirts.jasonlambert.io/getHtvData";

  constructor(
    private http: HttpClient
  ) {
    this.http.get(this.tShirtBlanksUrl).toPromise()
    .then(jsonData => {
      // console.log(JSON.stringify(jsonData, null, 2));
      if(jsonData.hasOwnProperty('data')) {
        this.tShirtBlanks = jsonData['data'];
      }
      this.tShirtBlanks.sort((a, b) => {
        if(a.name == b.name) return  0;
        return (a.name > b.name) ? 1 : -1;
      });
    });

    this.http.get(this.cncCutFilesUrl).toPromise()
    .then(jsonData => {
      // console.log(JSON.stringify(jsonData, null, 2));
      if(jsonData.hasOwnProperty('data')) {
        this.cncCutFiles = jsonData['data'];
        this.cncCutFiles.forEach((cutFile) => {
          cutFile.imgUrl = 'https://t-shirts.jasonlambert.io/' + cutFile.imgUrl;
        })
      }
    });

    this.http.get(this.htvOptionsUrl).toPromise()
    .then(jsonData => {
      // console.log(JSON.stringify(jsonData, null, 2));
      if(jsonData.hasOwnProperty('data')) {
        this.htvOptions = jsonData['data'];
      }
      this.htvOptions.sort((a, b) => {
        if(a.color == b.color) return  0;
        return (a.color > b.color) ? 1 : -1;
      });
    });

  }

  getTShirtBlanks() {
    return this.tShirtBlanks;
  }

  getCncCutFiles() {
    return this.cncCutFiles;
  }

  getHtvOptions() {
    return this.htvOptions;
  }

};

export interface CncCutFile {
  id: string,
  name: string,
  imgUrl: string
};

export interface HtvOption {
  id: string,
  brandName: string,
  color: string,
  pantoneEquivalentValue: string,
  htvType: string
};

export interface TShirtBlank {
  id: string,
  name: string,
  frontPic: { url: string, id: string },
  backPic: { url: string, id: string },
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
  modelId: string,
  model: { demographic: string }
};
