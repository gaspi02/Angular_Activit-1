import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PostsService} from '../services/post.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Post} from "../models/post.model";
import {post} from "selenium-webdriver/http";

@Component({
  selector: 'app-edit-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss']
})
export class EditPostComponent implements OnInit {
  postEditForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private postsService: PostsService,
              private router: Router, private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.initEditForm();
  }

  initEditForm() {
    this.postEditForm = this.formBuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required]
    });
  }

  onSaveEditPost() {
    const id = this.route.snapshot.params['id'];
    const titre = this.postEditForm.get('titre').value;
    const contenu = this.postEditForm.get('contenu').value;
    const editPost = new Post(titre, contenu);
    this.postsService.editPost(editPost, id);
    this.router.navigate(['/posts']);
  }
}
