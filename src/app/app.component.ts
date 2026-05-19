import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent implements OnInit {
  showHeader: boolean = true;
  transparentHeader: boolean = false;

  constructor(private router: Router) {}

  ngOnInit() {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects || event.url;
      // Hide header on login page
      this.showHeader = !url.includes('/login');
      // Make header transparent on home and conservacion pages
      this.transparentHeader = url.includes('/home') || url.includes('/conservacion') || url === '/';
    });
  }
}
