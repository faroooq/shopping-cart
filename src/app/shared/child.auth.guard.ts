import { Injectable } from "@angular/core";
import { CanActivateChild, Router } from "@angular/router";

// auth.guard.ts
@Injectable()
export class ChildAuthGuard implements CanActivateChild {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    userLoggedIn: boolean = true;

    constructor(private router: Router) { }

    canActivateChild() {
        if (this.userLoggedIn) {
            console.log("Child AuthGuard");
            return true;
        } else {
            this.router.navigate(['login']);
            return false;
        }
    }
}