import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
import { ItemListComponent } from './item-list/item-list.component';
import { LoginComponent } from './login/login.component';
import { ModelComponent } from './model/model.component';
import { AlertGuard } from './shared/alert.guard';
import { AuthGuard } from './shared/auth.guard';
import { ChildGuard } from './shared/child.guard';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'gadgets', component: ModelComponent,
    canActivateChild: [ChildGuard],
    children: [
      {
        path: '', redirectTo: 'mobiles', pathMatch: 'full'
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
    path: 'check-out/:model/:price', component: CheckOutComponent,
    canActivate: [AuthGuard],
    canDeactivate: [AlertGuard]
  },
  {
    path: 'login', component: LoginComponent
  }
  // {
  //   path: '**', component: HomeComponent
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
