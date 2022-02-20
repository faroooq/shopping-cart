import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from "@angular/router";
import { SharedService } from "./shared.service";

// auth.guard.ts
@Injectable()
export class AuthGuard {

    // We hard code this flag for now. 
    // We will retrieve this info from some service later on.
    // userLoggedIn: boolean = false;

    constructor(
        public router: Router,
        public sharedService: SharedService
    ) { }

    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log("Auth Guard");
        console.log(route.params);
        console.log(state.url);
        if (this.sharedService.isLoggedIn()) {
            console.log('User logged in')
            return true;
        } else {
            console.log('Un-Authorized User')
            this.router.navigate(['login'])
            return false;
        }
    }
}