import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DigitalproductionComponent } from './courses/digitalproduction/digitalproduction.component';
import { DigitalsoundengineeringComponent } from './courses/digitalsoundengineering/digitalsoundengineering.component';
import { AdmissionrequirementsComponent } from './admissions/admissionrequirements/admissionrequirements.component';
import { RegisterComponent } from './admissions/register/register.component';
import { FaqsComponent } from './admissions/faqs/faqs.component';
import { AboutusComponent } from './aboutsra/aboutus/aboutus.component';
import { WhychooseusComponent } from './aboutsra/whychooseus/whychooseus.component';
import { OurfacilitiesComponent } from './aboutsra/ourfacilities/ourfacilities.component';
import { ContactusComponent } from './contactus/contactus.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { EmailComponent } from './email/email.component';
import { MembersComponent } from './members/members.component';
import { HomeComponent } from './home/home.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  {path: 'digital-production', component: DigitalproductionComponent},
  { path: 'digital-sound', component: DigitalsoundengineeringComponent },
  { path: 'admission', component: AdmissionrequirementsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'faqs', component: FaqsComponent },
  { path: 'about-us', component: AboutusComponent },
  { path: 'why-choose-us', component: WhychooseusComponent  },
  { path: 'our-facilities', component: OurfacilitiesComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'login-email', component: EmailComponent },
  { path: 'members', component: MembersComponent },
  { path: 'contact-us', component: ContactusComponent },
  { path: '**', component: PagenotfoundComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
