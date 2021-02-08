
import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd } from '@angular/router';
import { Location, LocationStrategy, PathLocationStrategy } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AppContextService } from './services/app-context.service';

declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [
    Location, {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    }
  ]
})
export class AppComponent implements OnInit {
  title = 'app';
  location: any;
  routerSubscription: any;

  constructor(
    private router: Router,
    private appContext: AppContextService) {
  }


  ngOnInit() {
    this.recallJsFuntions();
    this.appContext.getUser();
  }
  recallJsFuntions() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationStart) {
          $('.ct-preloader').fadeIn('slow');
        }
      });
    this.routerSubscription = this.router.events
      .pipe(filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
      .subscribe(event => {
        $.getScript('assets/js/main.js');
        $('.ct-preloader').fadeOut('slow');
        this.location = this.router.url;
        if (!(event instanceof NavigationEnd)) {
          return;
        }
        window.scrollTo(0, 0);
      });
  }
}
