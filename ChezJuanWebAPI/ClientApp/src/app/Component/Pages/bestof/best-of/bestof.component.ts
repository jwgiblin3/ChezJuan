import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

import { BestOfItem } from 'src/app/models/bestof-item';
// import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-bestof',
  templateUrl: './bestof.component.html',
  styleUrls: ['./bestof.component.css']
})

  
export class BestOfComponent implements OnInit {

  bestOf: BestOfItem[];

  constructor(
      private dataservice: DataService,
      ) {
  }

  ngOnInit(): void {    
    
    this.dataservice.getAllBestOf().subscribe( results =>
      {
        this.bestOf = results;
      },
      err => console.log(err)
    );
  }
}
