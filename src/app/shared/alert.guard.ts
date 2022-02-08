import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { ModelComponent } from "../model/model.component";

// alert.guard.ts
@Injectable()
export class AlertGuard implements CanDeactivate<ModelComponent> {

    canDeactivate(
        component: ModelComponent,
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): boolean {
        console.log("Alert Guard");
        console.log(route.params);
        console.log(component);
        return window.confirm("Are you Sure to Continue to CheckOut?");
    }
}