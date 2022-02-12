import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {User, UserWrapper} from "../../model/model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CreateUsersService {
  private readonly apiUrl = environment.apiUrl
  private user: User = new User()

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  fillUserFields(email: string, name: string, surname: string, password: string, permissions: string) {
    this.user.email = email
    this.user.name = name
    this.user.surname = surname
    this.user.permissions = permissions.split(',')
    this.user.password = password
  }

  createUser(email: string, name: string, surname: string, password: string, permissions: string): Observable<UserWrapper> {
    this.fillUserFields(email, name, surname, password, permissions)

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};

    return this.httpClient.post<User>(this.apiUrl, this.user, options)
  }
}
