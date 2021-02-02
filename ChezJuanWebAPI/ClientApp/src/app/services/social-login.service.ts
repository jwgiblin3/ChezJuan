import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})

export class SocialloginService implements OnInit, OnDestroy{


    user: SocialUser;
    loggedIn: boolean;
    IsLoggedIn$: Observable<boolean>;
    private IsLoggedIn: BehaviorSubject<boolean>;
    ShowLogin$: Observable<boolean>;
    private ShowLogin: BehaviorSubject<boolean>;

    constructor(
        private authService: SocialAuthService
    ) {
        this.IsLoggedIn = new BehaviorSubject<boolean>(false);
        this.IsLoggedIn$ = this.IsLoggedIn.asObservable();
        this.ShowLogin = new BehaviorSubject<boolean>(false);
        this.ShowLogin$ = this.ShowLogin.asObservable();
    }
    ngOnDestroy(): void {
        
    }

    ngOnInit(): void {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            this.IsLoggedIn.next(this.loggedIn);
        });
    }

    signOut(): void {
        this.authService.signOut();
    }

    Login(): void {
        this.ShowLogin.next(true);
    }
}