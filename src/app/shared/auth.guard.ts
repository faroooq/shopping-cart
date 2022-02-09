import { Injectable } from "@angular/core";

// auth.guard.ts
@Injectable()
export class AuthGuard {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    userLoggedIn: boolean = true;

    constructor() { }

    canActivate(): boolean {
        if (this.userLoggedIn) {
            console.log('User logged in')
            return true;
        } else {
            console.log('Un-Autherized User')
            return false;
        }
    }
}