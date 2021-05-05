import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-specifications-card',
  templateUrl: './specifications-card.component.html',
  styleUrls: ['./specifications-card.component.scss']
})
export class SpecificationsCardComponent {

  @Output("ebayTitleChange") ebayTitleChange: EventEmitter<string> = new EventEmitter();
  @Output("ebayThemeChange") ebayThemeChange: EventEmitter<string> = new EventEmitter();
  @Input() ebayTitle: string;
  @Input() ebayTheme: string;

  fields = [
    { htmlName: "ebay-name", prettyName: "Ebay Title", onChangeFunction: "onTitleChange" },
    { htmlName: "ebay-theme", prettyName: "Ebay Theme", onChangeFunction: "onThemeChange" },
  ]

  constructor() { }

  onTitleChange(title) {
    this.ebayTitleChange.emit(title);
  }

  onThemeChange(theme) {
    this.ebayThemeChange.emit(theme);
  }

}
