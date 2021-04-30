import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
    private router: Router
  ) {
    router.events.subscribe((route:any) => {
      if(route.url === '/') this.router.navigate(['/about']);
    });
  }

  ngOnInit(): void {
  }
}
