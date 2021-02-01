import { Component, OnInit } from '@angular/core';
import { Recommendation } from 'src/app/models/recommendations.model';
import { DataService } from 'src/app/services/data.service';


//import * as data from '../../../../assets/data/recommendations.json';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})



export class RecommendationsComponent implements OnInit {

  recommendations: Recommendation[];
  constructor(
    private dataservice: DataService,
  ) {

  }

  ngOnInit(): void {

    this.dataservice.getRecommendations().subscribe(res => {
      this.recommendations = res;
    },
      err => console.log(err)
    );
  }

}
