import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

  @Input() posts: Array<{
    titre: string,
    contenu: string,
    created_at: Date,
    loveIts
  }>;

  constructor() {
  }

  ngOnInit() {
  }
}


