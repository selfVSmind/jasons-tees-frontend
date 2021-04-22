import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-specifications-card',
  templateUrl: './specifications-card.component.html',
  styleUrls: ['./specifications-card.component.scss']
})
export class SpecificationsCardComponent implements OnInit {

  fields = [
    { htmlName: "ebay-name", prettyName: "Ebay Title", onChangeFunction: "onTitleChange" },
    { htmlName: "ebay-theme", prettyName: "Ebay Theme", onChangeFunction: "onThemeChange" },
  ]

  constructor() { }

  ngOnInit(): void {
  }

  onTitleChange(title) {
    console.log(title);
  }

  onThemeChange(theme) {
    console.log(theme);
  }

}
