import { Component, OnInit } from '@angular/core';
import { DatabaseService } from './database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Jason\'s Tees';

  constructor(
    private databaseService: DatabaseService,
  ) {}

  ngOnInit(): void {
  }
}
