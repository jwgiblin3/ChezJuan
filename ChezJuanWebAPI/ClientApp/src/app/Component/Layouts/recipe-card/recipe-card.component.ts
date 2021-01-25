import { Component, Input, OnInit } from '@angular/core';
import { RecipeListItem } from 'src/app/models/recipe-detail';


@Component({
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})

export class RecipeCardComponent implements OnInit {

  @Input() recipe: RecipeListItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
