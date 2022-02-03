import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ErrorComponent } from './error/error.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ModelComponent } from './model/model.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'home', component: ItemListComponent
  },
  {
    path: 'check-out/iphone/10', component: CheckOutComponent
  },
  // Commented this as we are passing the parameters as an object, which we call optional parameters.
  // {
  //   path: 'check-out/:modelID/:versionID', component: CheckOutComponent
  // },
  {
    path: '**', component: ErrorComponent
  }
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
