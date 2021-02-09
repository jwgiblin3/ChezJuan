import { Injectable, Inject, OnInit, OnDestroy } from '@angular/core';
import { SocialAuthService, SocialUser } from 'angularx-social-login';
import { BehaviorSubject, Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { DataService } from './data.service';
import { AppContext, User as AppUser } from '../models/app-context.model';



@Injectable({
    providedIn: 'root'
})

export class AppContextService implements OnDestroy {

    userId: string
    user: SocialUser;
    private appContext: BehaviorSubject<AppContext>;
    appContext$: Observable<AppContext>;

    private appUser: BehaviorSubject<AppUser>;
    appUser$: Observable<AppUser>;
    loggedIn: boolean;
    IsLoggedIn$: Observable<boolean>;
    private IsLoggedIn: BehaviorSubject<boolean>;
    ShowLogin$: Observable<boolean>;
    ShowLogin: BehaviorSubject<boolean>;

    constructor(
        private authService: SocialAuthService,
        private cookieService: CookieService,
        private dataService: DataService
    ) {
        this.IsLoggedIn = new BehaviorSubject<boolean>(false);
        this.IsLoggedIn$ = this.IsLoggedIn.asObservable();
        this.ShowLogin = new BehaviorSubject<boolean>(false);
        this.ShowLogin$ = this.ShowLogin.asObservable();
        this.appUser = new BehaviorSubject<AppUser>(null);
        this.appUser$ = this.appUser.asObservable();
        this.appContext = new BehaviorSubject<AppContext>({ isLoggedIn: false, user: null });
        this.appContext$ = this.appContext.asObservable();
        this.initialize();
    }
    ngOnDestroy(): void {

    }

    private initialize()
    {
        this.authService.authState.subscribe((user) => {
            this.user = user;
            this.loggedIn = (user != null);
            this.IsLoggedIn.next(this.loggedIn);
            if (this.loggedIn) {

                let newuser: AppUser = {
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    imageUrl: user.photoUrl

                }

                this.dataService.saveUser(newuser).subscribe(response => {
                    user = response;
                    this.cookieService.set('userId', user.id, 3);
                    this.appUser.next(newuser)
                    this.appContext.next({ isLoggedIn: newuser?true:false, user: newuser});
                })
            }
        });
    }
    getUser() {

        this.userId = this.cookieService.get('userId');
        if (this.userId) {
            this.dataService.getUser(this.userId).subscribe(response => {
                this.appUser.next(response);
                this.appContext.next({ isLoggedIn: response?true:false, user: response});
            },
                err => console.log(err)
            );
        }
    }

    setShowLogin( status: boolean){
        this.ShowLogin.next(status);
    }
    signOut(): void {
        this.authService.signOut();
        this.cookieService.delete('userId');
        this.appContext.next({ isLoggedIn: false, user: null});

    }

    Login(): void {
        this.ShowLogin.next(true);
    }
}