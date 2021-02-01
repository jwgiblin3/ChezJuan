import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipe-diffulty',
  templateUrl: './recipe-difficulty.component.html',
  styleUrls: ['./recipe-difficulty.component.css']
})
export class DifficultyComponent implements OnInit {

  difficultyName = 'Amateur';

  @Input() difficulty: number;


  constructor(
   
  ) {

  }

  ngOnInit() {
    if ( this.difficulty===2) {
      this.difficultyName = 'Home Cook'
    } else if ( this.difficulty===3)  {
      this.difficultyName = 'Chef'
    }
  }
}
