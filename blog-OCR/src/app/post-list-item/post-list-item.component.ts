import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list-item',
  templateUrl: './post-list-item.component.html',
  styleUrls: ['./post-list-item.component.scss']
})
export class PostListItemComponent implements OnInit {
  // @Input() post: {
  //   titre: string,
  //   contenu: string,
  //   loveIts: 0,
  //   created_at: Date
  // };

  @Input() titre: string;
  @Input() contenu: string;
  @Input() created_at: Date;
  @Input() loveIts = 0;


  constructor() {
  }

  ngOnInit() {
  }

  onLove() {
    this.loveIts++;
  }

  outLove() {
    this.loveIts--;
  }
}
