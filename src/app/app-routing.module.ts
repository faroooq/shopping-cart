import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { ModelComponent } from './model/model.component';
import { AlertGuard } from './shared/alert.guard';
import { AuthGuard } from './shared/auth.guard';
import { ChildAuthGuard } from './shared/child.auth.guard';

// app.routing.module.ts file
const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'gadgets', component: ModelComponent,
    canActivateChild: [ChildAuthGuard],
    canDeactivate: [AlertGuard],
    children: [
      // We have added the below redirect just to have one default tab enabled.
      { path: "", redirectTo: "mobiles", pathMatch: "full" },
      { path: 'mobiles', component: ItemListComponent },
      { path: 'tablets', component: ItemListComponent },
      { path: 'laptops', component: ItemListComponent }
    ]
  },
  {
    path: 'check-out', component: CheckOutComponent,
    canActivate: [AuthGuard]
  },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
