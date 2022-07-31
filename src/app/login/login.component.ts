// login.component.ts
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  constructor(
    public httpClient: HttpClient,
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      console.log("Form Submitted!");
      const body = JSON.stringify(this.form.value);
      const headers = { 'content-type': 'application/json' }
      localStorage.setItem("isLoggedIn", "true")
      // let header = new HttpHeaders();
      // header.set('username', 'farooq');
      this.router.navigateByUrl('/gadgets');
      // this.httpClient.post('http://httpbin.org/post', body, { headers }).subscribe(data => data)
      this.form.reset();
    }
  }
}
class LoginModel {
  constructor(
    public email: string = '',
    public password: string = '') {
  }
}