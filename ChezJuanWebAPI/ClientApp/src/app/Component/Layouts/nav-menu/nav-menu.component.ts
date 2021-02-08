import { Component, OnInit } from '@angular/core';
import { User, AppContext } from 'src/app/models/app-context.model';
import { AppContextService } from 'src/app/services/app-context.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;
  appUser: User;
  loggedIn: boolean;
  appContext: AppContext;
  constructor(
    private appContextService: AppContextService
  ) {
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {

    this.appContextService.appContext$.subscribe(context => {
      this.appContext = context;
    })

  }

  Login(): void {
    this.appContextService.ShowLogin.next(true);
  }

  logout(): void {
    this.appContextService.signOut();
  }
}
