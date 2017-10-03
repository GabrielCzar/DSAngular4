import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {
  state: string = '';
  error: any;

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { 
    
  }

  ngOnInit() {
  }

  onSubmit(formData) {
    if(formData.valid) {
      console.log(formData.value);
      this.emailLogin(formData.value.email, formData.value.password);
    }
  }

  private emailLogin(email :string, password :string) {
    this.afAuth.auth.signInWithEmailAndPassword(email, password)
      .then(success => {
        console.log(success);
        this.router.navigate(['/members']);
      }).catch(err => {
        console.log(err);
        this.error = err;
      })
  }

}
