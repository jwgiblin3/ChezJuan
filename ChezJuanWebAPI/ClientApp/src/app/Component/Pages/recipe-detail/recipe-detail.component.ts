import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { RecipeDetail } from 'src/app/models/recipe-detail';
import { DataService } from 'src/app/services/data.service';
import { SocialloginService } from 'src/app/services/social-login.service';
import { Comment } from 'src/app/models/comments';
import { Rating } from 'src/app/models/rating';

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
  isLoggedIn = false;
  comments: Comment[] = [];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private route: ActivatedRoute,
    private authService: SocialAuthService,
    private loginservice: SocialloginService,
    private dataservice: DataService

  ) {
    this.recipeId = +this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.dataservice.getRecipe(this.recipeId).subscribe(result => {
      this.recipe = result;
      // console.log(this.recipe);
    }, error => console.error(error));

    this.authService.authState.subscribe((user) => {
      this.isLoggedIn = (user != null);
      if (this.isLoggedIn) {
        $('[rel=tooltip]').tooltip('disable')
      } else {
        $('[rel=tooltip]').tooltip('enable')
      }
    });

    this.getComments();
  }

  addComment(): void {

    let comment: Comment =
    {
      recipeId: this.recipeId,
      name: this.loginservice.user.name,
      email: this.loginservice.user.email,
      image: this.loginservice.user.photoUrl,
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
      user: this.loginservice.user.email,
      rating: rating
    }

    this.dataservice.saveRecipeRating(content).subscribe(res => {
      //
    },
      (err) => console.log(err)
    );
  }

  getComments(): void {
    this.dataservice.getComments(this.recipeId).subscribe(res => {
      this.comments = res;
    },
      err => console.log(err)
    );
  }

}
