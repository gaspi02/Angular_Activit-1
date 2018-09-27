import {Injectable} from '@angular/core';
import {Post} from '../models/Post.model';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  posts: Post[] = [];
  postsSubject = new Subject<Post[]>();

  constructor() {
  }

  emitPosts() {
    this.postsSubject.next(this.posts);
  }

  savePosts() {
    firebase.database().ref('/posts').set(this.posts);
  }

  getPosts() {
    firebase.database().ref('/posts').on('value', (data) => {
      this.posts = data.val() ? data.val() : [];
      this.emitPosts();
    });
  }

  getSinglePost(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/posts/' + id).once('value').then(
          (data) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewPost(newPost: Post) {
    newPost.created_at = Date.now();
    newPost.loveIts = 0;
    newPost.postBy = firebase.auth().currentUser.email;
    this.posts.push(newPost);
    this.savePosts();
    this.emitPosts();
  }

  updateLoveIt(upPost: Post, id: number) {
    this.posts[id].loveIts = upPost.loveIts;
    this.savePosts();
    this.emitPosts();
  }


  removePost(id: number) {
    this.posts.splice(id, 1);
    this.savePosts();
    this.emitPosts();
  }


  editPost(editedPost: Post, id: number) {
    editedPost.created_at = Date.now();
    editedPost.postBy = firebase.auth().currentUser.email;
    editedPost.loveIts = this.posts[id].loveIts;
    this.posts[id] = editedPost;
    this.savePosts();
    this.emitPosts();
  }
}
