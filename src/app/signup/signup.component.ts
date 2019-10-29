import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  error: any;
  state = '';
  formDta: NgForm;
  email: string;
  hide: boolean;
  password: string;

  constructor(public af: AngularFireAuth, private ngZone: NgZone, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth.createUserWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          if (success) {
            this.ngZone.run(() => this.router.navigate(['/login']));
            console.log('Signup was successfull: ', success);
          }
       
        }).catch(
          (err) => {
            this.error = err;
            console.log('Error in creating user: ', err);
          });
    }
  }


}
