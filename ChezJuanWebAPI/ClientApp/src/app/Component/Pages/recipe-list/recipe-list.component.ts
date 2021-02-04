import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecipeListItem } from 'src/app/models/recipe-detail';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

  
export class RecipeListComponent implements OnInit {

  recipes: RecipeListItem[];
  
  difficulty =  ['Ameteur', 'Home Chef', 'Chef'];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<RecipeListItem[]>(baseUrl + 'api/recipe/getRecipeAll').subscribe(result => {
      this.recipes = result;
    }, error => console.error(error));
  }

  ngOnInit(): void {
  }

}
