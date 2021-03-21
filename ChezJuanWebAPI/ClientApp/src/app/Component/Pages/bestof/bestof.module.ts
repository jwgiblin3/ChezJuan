import { NgModule } from '@angular/core';

//import { MatFormFieldModule } from '@angular/material/form-field';
//import { MatInputModule } from '@angular/material/input';
//import { MatSelectModule } from '@angular/material/select';
import { MatIconModule } from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BestOfRoutes } from './bestof.routes';
import { SocialLoginModule } from 'angularx-social-login';
import { BestOfComponent } from './best-of/bestof.component';
import { BestofDetailComponent } from './bestof-detail/bestof-detail.component';
import { BestOfCardComponent } from '../../Layouts/bestof-card/bestof-card.component';
import { NavMenuComponent } from '../../Layouts/nav-menu/nav-menu.component';
import { MaterialModule } from 'src/app/material.module';


@NgModule({
    declarations: [
        BestOfComponent,
        BestofDetailComponent,
        BestOfCardComponent,
        // NavMenuComponent,
    ],
    imports: [
        MatIconModule,
  //      MaterialModule,
  //      NavMenuComponent,
        RouterModule,
     //   MaterialModule,
        //MatFormFieldModule,
        //MatInputModule,
        //MatSelectModule,
        ReactiveFormsModule,
        NgbModule,
        BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
        HttpClientModule,
        FormsModule,
        SocialLoginModule,
        RouterModule.forChild(BestOfRoutes),
        BrowserAnimationsModule
    ],
    providers: [
        MaterialModule,
    ],
    exports: [
     //   MaterialModule,
     //   NavMenuComponent,
     
        BestOfComponent,
        BestofDetailComponent,
        BestOfCardComponent,
        RouterModule,
    ]
})
export class BestOfModule { }
