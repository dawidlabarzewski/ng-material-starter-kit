import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginModel } from '../models/login.model';
import { RegisterModel } from '../models/register/register.model';

@Injectable()
export class AuthService {
  constructor(private _httpClient: HttpClient) {
  }

  login(model: LoginModel): Observable<LoginModel> {
    return this._httpClient.post<LoginModel>('https://fakestoreapi.com/auth/login', model);
  }

  register(model: RegisterModel): Observable<RegisterModel> {
    return this._httpClient.post<RegisterModel>('https://fakestoreapi.com/users', model);
  }
}
