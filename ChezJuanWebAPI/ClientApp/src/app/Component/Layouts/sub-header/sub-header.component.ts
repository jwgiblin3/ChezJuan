import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-sub-header',
  templateUrl: './sub-header.component.html',
  styleUrls: ['./sub-header.component.css']
})
export class SubHeaderComponent implements OnInit {


  @Input() image: string;
  @Input() section: string;

  constructor(
    activatedroute: ActivatedRoute
  ) {
    activatedroute.data.subscribe(data => {
      this.image = data.image;
      this.section = data.section;
    });
  }

  ngOnInit() {

  }
}
