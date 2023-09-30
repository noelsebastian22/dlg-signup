import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AppConfig } from '../app-config/app-config';
import { Observable } from 'rxjs';
import { LoginUser } from 'src/app/shared/types/login-user';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private httpClient: HttpClient, private appConfig: AppConfig) {}

  /**
   * Signup a new user
   * @param user
   */
  public signup(user: LoginUser): Observable<Object> {
    return this.httpClient.post<LoginUser>(this.appConfig.apiRoots.signup, { ...user });
  }
}
