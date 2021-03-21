import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecipeListItem } from 'src/app/models/recipe-detail';
import { RecipeCategory } from 'src/app/models/recipe-category';
import { OptionValues } from 'src/app/models/option-values';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute } from '@angular/router';

import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-bestof-detail',
  templateUrl: './bestof-detail.component.html',
  styleUrls: ['./bestof-detail.component.css']
})

  
export class BestofDetailComponent implements OnInit {

  dataIsLoaded = true;
  
  constructor(
      http: HttpClient, 
      private dataservice: DataService,
      private router: ActivatedRoute,
      ) {

       // router.queryParams.subscribe(
       //   params => this.category = params['category']);

  }

  ngOnInit(): void {    
    
    /*this.dataservice.getAllRecipes().subscribe( results =>
      {
        this.recipes = results;
        this.recipesfiltered = results;
      },
      err => console.log(err)
    );
    */
  }
}
