// navbar.component.ts
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styles: [
    `
    .bg-color {
      background: #dd2525;
    }
    .nav-link {
        color: #fff;
    }
    .nav-link:hover {
        color: gray;
    }
    .navbar-brand {
      color: #fff
    }
    `
  ],
  encapsulation: ViewEncapsulation.Emulated
})
export class NavbarComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
}
