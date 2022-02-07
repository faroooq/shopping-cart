import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

// auth.guard.ts
@Injectable()
export class AuthGuard implements CanActivate {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    userLoggedIn: boolean = true;

    constructor(private router: Router) { }

    canActivate() {
        if (this.userLoggedIn) {
            console.log("AuthGuard");
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}