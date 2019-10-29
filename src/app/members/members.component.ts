import { Component, OnInit, OnDestroy } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { User } from './user';
import { RegisterService } from '../admissions/register/register.service';
import { Register } from '../admissions/register/register';


@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  name: any;
  // state = '';
  displayName: string;
  phoneNumber: string;
  email: string;
  photoURL: any;
  uid: any;
  user: User;
  provider: string;
  gender: string;
  courses: string;
  registerDate: string;
  session: string;
  state: string;

  member: Register;

  constructor(public af: AngularFireAuth, private router: Router, private registerService: RegisterService) { }

  ngOnInit() {

    this.getApplicantsList();

    this.af.authState.subscribe((user) => {
     this.user = this.af.auth.currentUser;
      user.providerData.forEach(profile => {
        this.provider = profile.providerId;
     });


    });


  }


  getApplicantsList() {
    this.registerService.getApplicantsList().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ key: c.payload.key, ...c.payload.val() })
        ))

    ).subscribe(applicants => {
      const email = this.af.auth.currentUser.email;
      applicants.forEach(applicant => {
          if (email === applicant.email) {
            this.member = applicant;

          }
      });
    });

  }



  logOut() {
    this.af.auth.signOut();
    this.router.navigateByUrl('/login');
  }




}
