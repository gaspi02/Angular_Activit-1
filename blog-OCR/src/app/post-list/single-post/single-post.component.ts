import {Component, OnInit} from '@angular/core';
import {Post} from '../../models/post.model';
import {ActivatedRoute, Router} from '@angular/router';
import {PostsService} from '../../services/post.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.scss']
})
export class SinglePostComponent implements OnInit {

  post: Post;

  constructor(private route: ActivatedRoute,
              private postService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.post = new Post('', '');
    const id = this.route.snapshot.params['id'];
    this.postService.getSinglePost(+id).then(
      (post: Post) => {
        this.post = post;
      }
    );
  }

  onBack() {
    this.router.navigate(['/posts']);
  }

  onLove() {
    const id = this.route.snapshot.params['id'];
    this.post.loveIts++;
    this.postService.updateLoveIt(this.post, id);
  }

  outLove() {
    const id = this.route.snapshot.params['id'];
    this.post.loveIts--;
    this.postService.updateLoveIt(this.post, id);
  }

  onDeleteSinglePost() {
    const id = this.route.snapshot.params['id'];
    this.postService.removePost(id);
    this.router.navigate(['/posts']);
  }
}

