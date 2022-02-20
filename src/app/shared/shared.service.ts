import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  dataChangeObserver = new BehaviorSubject<any>(null);
  paramsChangeObserver = new BehaviorSubject<any>(null);
  loggedIn: boolean = false;
  params: any = false;

  constructor() { }

  ngOnInit() { }

  setLoggedIn(loggedUser: boolean) {
    this.loggedIn = loggedUser;
    this.dataChangeObserver.next(this.loggedIn);
  }

  setParams(params: any) {
    this.params = params;
    this.paramsChangeObserver.next(this.params);
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
