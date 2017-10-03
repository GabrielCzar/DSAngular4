import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { MembersComponent } from './members/members.component';

import { AuthGuardService } from './auth.service';
import { routes } from './app.routes';

export const firebaseConfig = {
    apiKey: "AIzaSyCehInMpf0yjZgPdav36D6zjFyfNsOqrtM",
    authDomain: "app-auth-35373.firebaseapp.com",
    databaseURL: "https://app-auth-35373.firebaseio.com",
    projectId: "app-auth-35373",
    storageBucket: "app-auth-35373.appspot.com",
    messagingSenderId: "417660222092"
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    MembersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,

    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,

    routes
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }

