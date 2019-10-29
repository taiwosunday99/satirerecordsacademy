import { Component, OnInit, NgZone } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

  state = '';
  error: any;
  formData: NgForm;
  email: string;
  hide: boolean;
  password: string;

  constructor(public af: AngularFireAuth, private ngZone: NgZone, private router: Router) { }

  ngOnInit() {
  }


  onSubmit(formData) {
    if (formData.valid) {
      this.af.auth.signInWithEmailAndPassword(
        formData.value.email,
        formData.value.password
      ).then(
        (success) => {
          if (success) {
            this.ngZone.run(() => this.router.navigate(['/members']));
            // this.router.navigate(['/members']);
            // console.log('login was successfull: ', success);
          }
  
        }).catch(
          (err) => {
            this.error = err;
          });
    }
  }

}
