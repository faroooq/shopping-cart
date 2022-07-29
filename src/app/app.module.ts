import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemComponent } from './item/item.component';
import { ItemListComponent } from './item-list/item-list.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { ModelComponent } from './model/model.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './shared/auth.guard';
import { CardHoverDirective } from './shared/card-hover.directive';
import { AlertGuard } from './shared/alert.guard';
import { RainbowDirective } from './shared/rainbow.directive';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DefaultPipe } from './shared/default.pipe';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    ItemComponent,
    ItemListComponent,
    NavbarComponent,
    CheckOutComponent,
    ModelComponent,
    HomeComponent,
    LoginComponent,
    CardHoverDirective,
    RainbowDirective,
    DefaultPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    AlertGuard,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
