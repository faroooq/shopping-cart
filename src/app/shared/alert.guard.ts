import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { CheckOutComponent } from "../check-out/check-out.component";
import { ModelComponent } from "../model/model.component";

// alert.guard.ts
@Injectable()
export class AlertGuard implements CanDeactivate<CheckOutComponent> {

    canDeactivate(
        component: CheckOutComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ) {
        console.log("Alert Guard");
        console.log(route.params);
        console.log(state.url);
        console.log(component);
        return window.confirm("Are you Sure to Leave CheckOut?");
    }
}