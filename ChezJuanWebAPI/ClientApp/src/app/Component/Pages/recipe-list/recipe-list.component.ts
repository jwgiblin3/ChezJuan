import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecipeListItem } from 'src/app/models/recipe-detail';
import { RecipeCategory } from 'src/app/models/recipe-category';
import { OptionValues } from 'src/app/models/option-values';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

import {FormControl} from '@angular/forms';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})

  
export class RecipeListComponent implements OnInit {

  recipes: RecipeListItem[];
  recipesfiltered: RecipeListItem[];
  search =  new FormControl();
  difficulties: OptionValues[] =  [{ name: 'Ameteur', optionValue: 1}, { name: 'Home Chef', optionValue: 1},  { name: 'Chef', optionValue: 1}];
  times: OptionValues[] =  [{ name: 'Less 30 minutes', optionValue: '0_30'},{ name: '30-60 minutes', optionValue: '30_60'},{ name: '60 or More', optionValue: '60_999'}];
  cats: OptionValues[] = [];
  categories: RecipeCategory[];
  category: string;
  selectedTime: string[] = [];
  selectedCategories: string[]= [];
  selectedDiff: number[]= [];

  categoriesForm = new FormControl(); 
  constructor(
      http: HttpClient, 
      private dataservice: DataService,
      private router: ActivatedRoute,
      ) {

        router.queryParams.subscribe(
          params => this.category = params['category']);

  }

  ngOnInit(): void {    
    
    this.dataservice.getAllRecipes().subscribe( results =>
      {
        this.recipes = results;
        this.recipesfiltered = results;
      },
      err => console.log(err)
    );


    this.dataservice.getCatogies().subscribe( results =>
    {
      this.categories = results;
      this.cats = [];
      this.categories.forEach(element => {
        this.cats.push( { name: element.name, optionValue: element.name.split(' ').join('').toLowerCase()  });
        
      });
      this.setSelected();
    },
    err => console.log(err)
    );

  }

  setSelected(): void {
   // this.selected = this.cats.filter( x=> x.optionValue ===this.category)[0];
    //this.selectedCategories.push(selected);
    this.selectedCategories.push(this.category);//= this.category;//.push(this.selected.optionValue);

  }

  selectionChanged(event:any) : void {
    console.log(event);
    console.log(this.selectedCategories);
    this.filter();
  }

  filter() {
    this.recipesfiltered = this.recipes;
    if ( this.selectedCategories ) {
      this.recipesfiltered = this.recipesfiltered.filter( f=> f.categories.some(r=> this.selectedCategories.includes(r)));
      // es6const found = arr1.some(r=> arr2.indexOf(r) >= 0)
    }

    if( this.selectedDiff) {
      this.recipesfiltered = this.recipesfiltered.filter( f=> this.selectedDiff.includes(f.difficulty));
    }

    if( this.selectedTime) {
      
    }
  }

}
