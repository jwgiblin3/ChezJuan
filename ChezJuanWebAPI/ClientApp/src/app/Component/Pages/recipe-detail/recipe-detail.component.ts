import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SocialAuthService } from 'angularx-social-login';
import { RecipeDetail } from 'src/app/models/recipe-detail';
import { DataService } from 'src/app/services/data.service';
import { Comment } from 'src/app/models/comments';
import { Rating } from 'src/app/models/rating';
import { AppContextService } from 'src/app/services/app-context.service';
import { AppContext, User as AppUser } from 'src/app/models/app-context.model';
import { FormControl, Validators } from '@angular/forms';

//import * as data from '../../../../assets/data/recipes.json';
declare var $: any;

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeDetail;
  recipeId: number;
  comment: string;
  appContext: AppContext;
  comments: Comment[] = [];
  unsavedRating: Rating;
  dataIsLoaded: Promise<boolean>;
  hasBeenRated = false;
  
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private route: ActivatedRoute,
    private authService: SocialAuthService,
    private appContextService: AppContextService,
    private dataservice: DataService

  ) {
    this.recipeId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataservice.getRecipe(this.recipeId).subscribe(result => {
      this.recipe = result;
      this.dataIsLoaded = Promise.resolve(true);
      // console.log(this.recipe);
    }, error => console.error(error));

    this.appContextService.appContext$.subscribe((appContext) => {
      this.appContext = appContext;
      if ( this.appContext.isLoggedIn && this.unsavedRating) {
        this.saveRating(this.unsavedRating);
      }
    });

    this.getComments();
  }

  addComment(): void {

    let comment: Comment =
    {
      recipeId: this.recipeId,
      name: this.appContext.user.name,
      email: this.appContext.user.email,
      image: this.appContext.user.imageUrl,
      comment: this.comment
    }

    this.dataservice.SaveRecipeComments(comment).subscribe(res => {
      this.getComments();
    },
      (err) => console.log(err)
    );

    this.getComments();
  }

  submitRate(rating: number): void {
    let content: Rating =
    {
      recipeId: this.recipeId,
      email: this.appContext.user.email,
      rating: rating
    }

    if ( this.appContext.isLoggedIn) {
      this.saveRating(content);
    } else {
      this.unsavedRating = content;
      this.signIn();
    }
  }

  private saveRating(content: Rating) {
    

    this.dataservice.saveRecipeRating(content).subscribe(res => {
      this.hasBeenRated = true;
      if ( this.unsavedRating) {
        this.unsavedRating = null;
      }
    },
      (err) => console.log(err)
    );
  }

  signIn(){
    this.appContextService.setShowLogin(true);
  }

  getComments(): void {
    this.dataservice.getComments(this.recipeId).subscribe(res => {
      this.comments = res;
    },
      err => console.log(err)
    );
  }

}
