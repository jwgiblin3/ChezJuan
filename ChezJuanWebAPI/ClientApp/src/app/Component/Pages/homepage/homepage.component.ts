import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { RecipeCategory } from 'src/app/models/recipe-category';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  categories: RecipeCategory[]

  constructor( 
    private dataservice: DataService) {

  }

  ngOnInit(): void {
    this.dataservice.getCatogies().subscribe( results =>
      {
        this.categories = results;
      },
      err => console.log(err)

      );
  }

}
