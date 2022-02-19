// login.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: any;
  model: LoginModel = new LoginModel();

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      this.form.reset();
      this.router.navigate(['check-out'])
    }
  }
}
class LoginModel {
  constructor(
    public email: string = '',
    public password: string = '') {
  }
}
