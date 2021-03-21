import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Comment } from 'src/app/models/comments';
import { Vote } from './vote.model';

@Component({
  selector: 'app-vote',
  templateUrl: './vote.component.html',
  styleUrls: ['./vote.component.css']
})
export class VoteComponent implements OnInit {

  @Input() currentVote: Vote;
  @Output() voteClick = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  vote(vote: number): void {
    this.voteClick.emit(vote);
  }

}
