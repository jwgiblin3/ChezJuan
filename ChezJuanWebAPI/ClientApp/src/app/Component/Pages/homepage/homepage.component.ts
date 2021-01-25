import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecipeCategory } from 'src/app/models/recpe-category';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categories: RecipeCategory[]

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<RecipeCategory[]>(baseUrl + 'api/recipe/getRecipeCategory').subscribe(result => {
      this.categories = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
