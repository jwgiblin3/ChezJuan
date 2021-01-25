import { Component, OnInit } from '@angular/core';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { SocialloginService } from 'src/app/services/social-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']

})
export class LoginComponent implements OnInit {

  isLoggedIn: boolean = false;
  display = 'none';

  constructor(
    private authService: SocialAuthService,
    private loginservice: SocialloginService
  ) { }

  ngOnInit(): void {
    
    this.loginservice.IsLoggedIn$.subscribe(IsLoggedIn => {
      this.setLoginDisplay(IsLoggedIn);
      this.isLoggedIn = IsLoggedIn;
    }
    );

    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = (user != null);
    });
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
    console.log(this.loginservice.loggedIn);
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
    this.display = 'none';
  }

  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
    this.display = 'none';
  }

}
