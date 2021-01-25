import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { NavMenuComponent } from './Component/Layouts/nav-menu/nav-menu.component';

import { PreloaderComponent } from './Component/Layouts/preloader/preloader.component';
import { HomepageComponent } from './Component/Pages/homepage/homepage.component';
import { FooterComponent } from './Component/Layouts/footer/footer.component';
import { CategoryComponent } from './Component/Layouts/category/category.component';
import { ContactusComponent } from './Component/Pages/contactus/contactus.component';
import { RecommendationsComponent } from './Component/Pages/recommnedations/recommendations.component';
import { RecipeDetailComponent } from './Component/Pages/recipe-detail/recipe-detail.component';
import { ProdRecComponent } from './Component/Layouts/prod-rec/prod-rec.component';
import { RecipeListComponent } from './Component/Pages/recipe-list/recipe-list.component';
import { RecipeCardComponent } from './Component/Layouts/recipe-card/recipe-card.component';


import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider
} from 'angularx-social-login';
import { LoginComponent } from './Component/Layouts/login/login.component';
import { CommentsComponent } from './Component/Layouts/comments/comments.component';

@NgModule({
  declarations: [
    AppComponent,

    NavMenuComponent,
    PreloaderComponent,
    FooterComponent,
    HomepageComponent,
    CategoryComponent,
    ContactusComponent,
    RecipeDetailComponent,
    RecommendationsComponent,
    ProdRecComponent,
    RecipeListComponent,
    RecipeCardComponent,
    PreloaderComponent,
    LoginComponent,
    CommentsComponent

  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    SocialLoginModule,
    RouterModule.forRoot([
    { path: '', component: HomepageComponent, pathMatch: 'full' },
    { path: 'contactus', component: ContactusComponent },
    { path: 'recommendations', component: RecommendationsComponent },
    { path: 'recipes', component: RecipeListComponent },
    { path: 'recipe', component: RecipeDetailComponent },

], { relativeLinkResolution: 'legacy' })
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '219406115199-klgralci42degbcs3kf73hiteu8ihm5j.apps.googleusercontent.com'
            )
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('777121849826944')
          }
        ]
      } as SocialAuthServiceConfig,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
