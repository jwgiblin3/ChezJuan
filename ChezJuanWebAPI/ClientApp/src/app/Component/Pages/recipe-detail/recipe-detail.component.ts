import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FacebookLoginProvider, GoogleLoginProvider, SocialAuthService } from 'angularx-social-login';
import { RecipeDetail } from 'src/app/models/recipe-detail';
import { DataService } from 'src/app/services/data.service';
import { SocialloginService } from 'src/app/services/social-login.service';
import { Comment } from 'src/app/models/comments';

//import * as data from '../../../../assets/data/recipes.json';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

  recipe: RecipeDetail;
  recipeId: number;
  comment: string;
  comments: Comment[] = [];
  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string,
    private route: ActivatedRoute,
    private authService: SocialAuthService,
    private loginservice: SocialloginService,
    private dataservice: DataService

  ) {
    this.recipeId = +this.route.snapshot.queryParams['recipeId'];
    http.get<RecipeDetail>(baseUrl + 'api/recipe/GetRecipe/' + this.recipeId).subscribe(result => {
      this.recipe = result;
      console.log(this.recipe);
    }, error => console.error(error));
  }

  ngOnInit(): void {
    this.getComments();
  }

  addComment(): void {
    console.log('Add Comment')
    let comment: Comment =
    {
      recipeId: this.recipeId,
      name: this.loginservice.user.name,
      email: this.loginservice.user.email,
      image: this.loginservice.user.photoUrl,
      comment: this.comment
    }

    this.dataservice.SaveRecipeComments(comment).subscribe(res =>
      {
        this.getComments();
      },
      (err)=> console.log(err)
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
