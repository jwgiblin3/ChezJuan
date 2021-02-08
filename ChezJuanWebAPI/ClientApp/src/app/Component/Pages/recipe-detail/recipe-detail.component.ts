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
      // console.log(this.recipe);
    }, error => console.error(error));

    this.appContextService.appContext$.subscribe((appContext) => {
      this.appContext = appContext;
      this
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
      user: this.appContext.user.email,
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
