import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

const url: string = "http://localhost:3000/api/";

@Injectable({
  providedIn: 'root'
})
export class HttpWrapperService {

  constructor(
    public httpClient: HttpClient
  ) { }

  get(endpoint: string): Observable<any> {
    // let headers = new HttpHeaders();
    // headers = headers.append('header-1', 'value-1');

    let params = new HttpParams();
    params = params.append('course_enabled', 'true');

    return this.httpClient.get(url + endpoint, { params });
  }

  post(endpoint: string, data: any): Observable<any> {
    return this.httpClient.post(url + endpoint, data);
  }
}

