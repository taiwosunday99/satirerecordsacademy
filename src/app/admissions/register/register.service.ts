import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Register } from './register';
import { Contact } from 'src/app/contactus/contact';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  regRef: AngularFireList<Register> = null;
  contactRef: AngularFireList<Contact> = null;


  constructor(private db: AngularFireDatabase) {
    this.regRef = db.list('/applicants');
    this.contactRef = db.list('/message');
   }




   createRegister(
     firstname, lastname, email, address, state, phone, gender, courses, session, instrument, knowledge, about, comments, registerDate) {
     this.regRef.push({
       'firstname': firstname,
       'lastname': lastname,
       'email': email,
       'address': address,
       'state': state,
       'phone': phone,
       'gender': gender,
       'courses': courses,
       'session': session,
       'instrument': instrument,
       'knowledge': knowledge,
       'about': about,
       'comments': comments,
       'registerDate': registerDate
     });

   }

   createContact(name, email, subject, message, postDate) {
     this.contactRef.push({
       'name': name,
       'email': email,
       'subject': subject,
       'message': message,
       'postDate': postDate
     });
   }


   getApplicantsList(): AngularFireList<Register> {
     return this.regRef;
   }



}
