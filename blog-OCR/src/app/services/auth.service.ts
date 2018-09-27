import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {reject} from 'q';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
  }

  createNewUser(email: string, password: string) {
    return new Promise(
      (resolve) => {
        firebase.auth().createUserWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signInUser(email: string, password: string) {
    return new Promise(
      (resolve) => {
        firebase.auth().signInWithEmailAndPassword(email, password).then(
          () => {
            resolve();
          },
          (error) => {
            reject(error);
          }
        );
      }
    );
  }

  signµOutUser() {
    firebase.auth().signOut();
  }
}
