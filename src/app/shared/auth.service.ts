import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class AuthService {
    constructor(private http: HttpClient) {
    }
    public get setLogin() {
        return null;
    }
    login() {
        let loggedIn = localStorage.getItem("isLoggedIn");
        console.log(loggedIn + ' ::::')
        return loggedIn;
    }
}