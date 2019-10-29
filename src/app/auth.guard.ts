
import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';


@Injectable()
export class AuthGuard implements CanActivate {


    constructor(private af: AngularFireAuth, private router: Router) { }


    // canActivate() {
    //     const user = this.af.auth.currentUser;
    //     if (user) {
    //         this.router.navigate(['/members']);
    //     }
    //     return !user;
    // }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean | Observable<boolean> | Promise<boolean> {

       this.af.auth.onAuthStateChanged(user => {
            if (!user) {
                this.router.navigate(['/login']);
            }
        });
        return this.router.navigate(['/members']);
    }

}



































// import { Injectable } from "@angular/core";
// import { CanActivate, Router } from '@angular/router';
// import { AngularFireAuth } from '@angular/fire/auth';
// import { Observable } from 'rxjs';

// import 'rxjs/add/operator/take';
// import 'rxjs/add/operator/do';
// import 'rxjs/add/operator/map';


// @Injectable()
// export class AuthGuard implements CanActivate {

//     constructor(private auth: AngularFireAuth, private router: Router) {}

//     canActivate(): Observable<boolean> | Promise<boolean> {
//     return Observable.from(this.auth)
//     .take(1)
//     .map(state => !!state)
//     .do(authenticated => {
//         if (!authenticated) { this.router.navigate(['/login']); }
//     });
// }

// }
