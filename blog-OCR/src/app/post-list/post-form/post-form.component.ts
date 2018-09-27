import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {Post} from '../../models/post.model';
import {PostsService} from '../../services/post.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  postForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router) {
  }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.postForm = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }

  onSavePost() {
    const titre = this.postForm.get('titre').value;
    const contenu = this.postForm.get('contenu').value;
    const newPost = new Post(titre, contenu);
    this.postsService.createNewPost(newPost);
    this.router.navigate(['/posts']);
  }
}

