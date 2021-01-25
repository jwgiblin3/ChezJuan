import { Component, OnInit, Input } from '@angular/core';
import { RecipeCategory } from 'src/app/models/recpe-category';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {

  @Input() category: RecipeCategory;


  constructor() { }

  ngOnInit(): void {
  }

}
