import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { RegisterService } from '../admissions/register/register.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  contactForm: FormGroup;
  postDate: string;
  message: string;

  constructor(private registerService: RegisterService) { }

  ngOnInit() {

    this.contactForm = new FormGroup({
      name: new FormControl(null, {
        validators: [Validators.required]
      }),
      email: new FormControl(null, {
        validators: [Validators.required]
      }),
      subject: new FormControl(null, {
        validators: [Validators.required]
      }),
      message: new FormControl(null, {
        validators: [Validators.required]
      })
    });



  }


  onContact() {
    if (this.contactForm.invalid) {
      return;
    }
    this.postDate = new Date().toString();

    this.registerService.createContact(
      this.contactForm.value.name,
      this.contactForm.value.email,
      this.contactForm.value.subject,
      this.contactForm.value.message,
      this.postDate
    );
    this.message = 'Message sent successfully! We will get back to you shortly';
    this.contactForm.reset();
  }






}
