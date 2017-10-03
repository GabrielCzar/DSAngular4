import { Component, OnInit } from '@angular/core';

import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { Router } from '@angular/router';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';

  constructor(private db: AngularFireDatabase, private afAuth: AngularFireAuth, private router: Router) { 
    this.afAuth.authState.subscribe(auth => {
      if (auth) {
        this.name = auth;
      }
    });
  }

  ngOnInit() {
  }

  signOut(): void {
    this.afAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }
}
