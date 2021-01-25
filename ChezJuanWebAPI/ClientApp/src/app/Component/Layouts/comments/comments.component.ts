import { Component, OnInit, Input } from '@angular/core';

import { Comment } from 'src/app/models/comments';

@Component({
  selector: 'app-comment',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {

  @Input() comment: Comment;


  constructor() { }

  ngOnInit(): void {
  }

}
