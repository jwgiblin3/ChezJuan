import { Component, OnInit } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialloginService } from 'src/app/services/social-login.service';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {
  isExpanded = false;

  user: SocialUser;
  loggedIn: boolean;

  constructor(
    private authService: SocialAuthService,
    private loginservice: SocialloginService
  ) {
  }
  collapse() {
    this.isExpanded = false;
  }

  toggle() {
    this.isExpanded = !this.isExpanded;
  }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.loginservice.loggedIn = (user != null);
      this.loginservice.user = user;
      this.loggedIn = this.loginservice.loggedIn
      this.user = this.loginservice.user
      if ( this.loggedIn ) {
        /// Add somegthing here
      }

    });
  }
}