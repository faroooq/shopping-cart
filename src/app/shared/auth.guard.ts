import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

// auth.guard.ts
@Injectable()
export class AuthGuard {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    userLoggedIn: boolean = true;

    constructor(public router: Router) { }

    canActivate(): boolean {
        if (this.userLoggedIn) {
            console.log('User logged in')
            this.router.navigate(['check-out']);
            return true;
        } else {
            console.log('Un-Autherized User')
            this.router.navigate(['login']);
            return false;
        }
    }
}