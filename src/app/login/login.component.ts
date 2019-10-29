import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { auth } from 'firebase';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error: any;


  constructor(public af: AngularFireAuth, private ngZone: NgZone, private router: Router) {}



  ngOnInit() {
  }

  loginFb() {
    this.af.auth.signInWithPopup(new auth.FacebookAuthProvider())
    .then(
      (success) => {
        if (success) {
          this.ngZone.run(() => this.router.navigate(['/members']));

        }

      }).catch(
        (err) => {
          this.error = err;

        }
      );
  }

  loginGoogle() {
    this.af.auth.signInWithPopup(new auth.GoogleAuthProvider())
    .then(
      (success) => {
        if (success) {
          this.ngZone.run(() => this.router.navigate(['/members']));

        }
      }).catch(
        (err) => {
          this.error = err;

        }
      );
  }


  // logout() {
  //   this.af.auth.signOut();
  // }



}
