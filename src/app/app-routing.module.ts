import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ModelComponent } from './model/model.component';

// http://localhost:4200/check-out;modelID=IPhone;versionID=10
// http://localhost:4200/check-out/IPhone/10

// app.routing.module.ts file
const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'gadgets', component: ModelComponent,
    children: [
      // We have added the below redirect just to have one default tab enabled.
      {
        path: "", redirectTo: "mobiles", pathMatch: "full"
      },
      {
        path: 'mobiles', component: ItemListComponent
      },
      {
        path: 'tablets', component: ItemListComponent
      },
      {
        path: 'laptops', component: ItemListComponent
      }
    ]
  },
  {
    path: 'check-out', component: CheckOutComponent
  },
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
