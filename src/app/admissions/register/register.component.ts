import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from './register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message: string;
  registerDate: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {

    this.registerForm = new FormGroup({
      firstname: new FormControl(null, {
        validators: [Validators.required]
      }),
      lastname: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      address: new FormControl(null, {
        validators: [Validators.required]
      }),
      phone: new FormControl(null, {
        validators: [Validators.required]
      }),
      state: new FormControl(null, {
        validators: [Validators.required]
      }),
      gender: new FormControl(null, {
        validators: [Validators.required]
      }),
      courses: new FormControl(null, {
        validators: [Validators.required]
      }),
      session: new FormControl(null, {
        validators: [Validators.required]
      }),
      instrument: new FormControl(null, {
        validators: [Validators.required]
      }),
      knowledge: new FormControl(null, {
        validators: [Validators.required]
      }),
      about: new FormControl(null, {
        validators: [Validators.required]
      }),
      comments: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }


  onRegister() {
      console.log('this is register click!');
    if (this.registerForm.invalid) {
      return;
    }

     this.registerDate = new Date().toString();
   
      this.registerService.createRegister(
        this.registerForm.value.firstname,
        this.registerForm.value.lastname,
        this.registerForm.value.email,
        this.registerForm.value.address,
        this.registerForm.value.state,
        this.registerForm.value.phone,
        this.registerForm.value.gender,
        this.registerForm.value.courses,
        this.registerForm.value.session,
        this.registerForm.value.instrument,
        this.registerForm.value.knowledge,
        this.registerForm.value.about,
        this.registerForm.value.comments,
        this.registerDate
      );
      this.message = 'Your registration has being successfully submitted! We will get back to you as soon as possible';
      this.registerForm.reset();

  }



}


