import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import {HttpBackendClientService} from './HttpConfig/httpbackend-client'; //


@Injectable({
  providedIn: 'root'
})
export class CurdServiceService {

  constructor(private http: HttpClient,
              private httpBackend: HttpBackendClientService) { }
  getLoginResponse(loginCredentials) {
    return this.httpBackend.post('http://localhost:2000/api/el/login', loginCredentials);
  }
}
