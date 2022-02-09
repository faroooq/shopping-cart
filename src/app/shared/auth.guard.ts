import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router, RouterStateSnapshot } from "@angular/router";
import { ItemListComponent } from "../item-list/item-list.component";

// auth.guard.ts
@Injectable()
export class AuthGuard {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    userLoggedIn: boolean = true;

    constructor(private router: Router) { }

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