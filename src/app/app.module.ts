import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { CartSummaryComponent } from './cart-summary/cart-summary.component';
import { ErrorComponent } from './error/error.component';
import { ModelComponent } from './model/model.component';
import { HomeComponent } from './home/home.component';
import { OffersComponent } from './offers/offers.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { CardHoverDirective } from './shared/card-hover.directive';
import { ChildAuthGuard } from './shared/child.auth.guard';
import { AlertGuard } from './shared/alert.guard';
import { RainbowDirective } from './shared/rainbow.directive';

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    NavbarComponent,
    CheckOutComponent,
    CartSummaryComponent,
    ErrorComponent,
    ModelComponent,
    HomeComponent,
    OffersComponent,
    LoginComponent,
    CardHoverDirective,
    RainbowDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [AuthGuard, ChildAuthGuard, AlertGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
