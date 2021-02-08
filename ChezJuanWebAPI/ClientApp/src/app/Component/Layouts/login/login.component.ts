import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService, SocialUser } from 'angularx-social-login';
import { SocialloginService } from 'src/app/services/social-login.service';
import { AppContextService } from 'src/app/services/app-context.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  display = 'none';
  showLogin = false;
  user: SocialUser;
  
  constructor(
    private authService: SocialAuthService,
    private appContext: AppContextService
  ) { }

  ngOnInit(): void {
   
    this.appContext.ShowLogin$.subscribe((show) => {
      this.showLogin = show;
      this.setLoginDisplay(show);
    });

    /*
    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = (user != null);
      this.user = user;
    });
    */
  }

  openModal() {
    this.display = 'block';
  }

  closeModal() {
    this.display = 'none';
  }

  setLoginDisplay(displayLogin: boolean) {
    if (displayLogin) {
      this.display = 'block';
    } else {
      this.display = 'none';
    }
  }


  signInWithGoogle(): void {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.display = 'none';
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.display = 'none';
  }

}
