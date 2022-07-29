import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {

  }

  gotoGadgets(url: any) {
    this.router.navigate(url);
  }

  logout() {
    // localStorage.removeItem("isLoggedIn");
    console.log('Logged Out')
    localStorage.setItem("isLoggedIn", "false")
    // remove user from local storage and set current user to null
    this.router.navigate(['login'])
  }

}
