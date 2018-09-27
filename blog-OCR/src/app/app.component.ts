import {Component} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor() {
    const config = {
      apiKey: 'AIzaSyB807fuhWbRUilZhQxbuJqgcnPKaOIwIP0',
      authDomain: 'blog-ocr-b4b9c.firebaseapp.com',
      databaseURL: 'https://blog-ocr-b4b9c.firebaseio.com',
      projectId: 'blog-ocr-b4b9c',
      storageBucket: '',
      messagingSenderId: '7359061865'
    };
    firebase.initializeApp(config);
  }
}
