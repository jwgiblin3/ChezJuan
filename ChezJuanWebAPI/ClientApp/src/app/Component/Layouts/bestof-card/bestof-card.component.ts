import { Component, Input, OnInit } from '@angular/core';
import { BestOfItem } from 'src/app/models/bestof-item';
import { RecipeListItem } from 'src/app/models/recipe-detail';


@Component({
  selector: 'app-bestof-card',
  templateUrl: './bestof-card.component.html',
  styleUrls: ['./bestof-card.component.css']
})

export class BestOfCardComponent implements OnInit {

  @Input() item: BestOfItem;
  
  constructor() { }

  ngOnInit(): void {
  }

}
