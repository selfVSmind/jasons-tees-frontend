import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  aboutPageTextSections = [
    { header: "Background Story", content: "Custom t-shirt sales were booming on ebay! (OK, I technically never actually turned a profit.) My business model involved me creating custom graphics on heat transfer vinyl, then applying them to a blank t-shirt. The problem was that ebay had no way of knowing that I was using the same inventory of size small black t-shirts, for example, for about 20 different listings. If I sold one small black t-shirt, I would have to manually update every listing that used that shirt. Ebay's listing tools just weren't cutting it. Once I had more than a handful of designs for sale, updating the prices and inventory counts was genuinely very frustrating and slow." },
    { header: "What This Site Does", content: "I created this website to make creating new listings on ebay incredibly easy and fast, but the biggest draw for me was knowing that I could use it down the road to experiement with pricing and to update inventory counts whenever I sold a shirt online or to a friend in person." },
    { header: "How It Does It", content: "Recently I decided to take up learning Angular, so I completely rebuilt this site's front end to practice my new skills. (See the old vanilla javascript version <a href=\"https://t-shirts.jasonlambert.io/old-version\">here</a>.) For the backend, I'm running a NodeJS express server. Image Magick handles all the special image conversion and overlays on the server." }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
