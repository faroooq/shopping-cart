// login.component.ts
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpWrapperService } from '../shared/http-wrapper.service';
import { SharedService } from '../shared/shared.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('f') form: any;
  model: LoginModel = new LoginModel();

  constructor(
    public router: Router,
    public sharedService: SharedService,
    public httpWrapper: HttpWrapperService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.form.valid) {
      // console.log("Form!" + JSON.stringify(this.model));
      this.httpWrapper.post('register', this.model)
        .subscribe(data => {
          this.form.reset();
          this.sharedService.setLoggedIn(true);
          this.router.navigate(['check-out'])
        });
    }
  }
}
class LoginModel {
  constructor(
    public user_name: string = '',
    public email: string = '',
    public password: string = '') {
  }
}
