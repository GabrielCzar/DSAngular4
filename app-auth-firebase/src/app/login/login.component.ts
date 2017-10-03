import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

import * as firebase from 'firebase/app';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.authState.subscribe(auth => {
      this.router.navigateByUrl('/members');
    });
  }

  ngOnInit() { }

  loginGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return this.socialSignIn(provider);
  }

  private socialSignIn(provider) {
    return this.afAuth.auth.signInWithPopup(provider)
      .then(success => this.router.navigate(['/members']))
      .catch(error => this.error = error);
  }

}
