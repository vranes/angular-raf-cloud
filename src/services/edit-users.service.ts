import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {LoginService} from "./login.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User, UserWrapper} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EditUsersService {
  private readonly apiUrl = environment.apiUrl
  private user: User = new User()

  constructor(private httpClient: HttpClient, private loginService: LoginService) {}

  setUser(user: User) {
    this.user = user
  }

  getUser(): User{
    return this.user
  }

  editUserFields(email: string, name: string, surname: string, permissions: string) {
    this.user.email = email
    this.user.name = name
    this.user.surname = surname
    this.user.permissions = permissions.split(',')
  }

  editUser(email: string, name: string, surname: string, permissions: string): Observable<UserWrapper> {
    this.editUserFields(email, name, surname, permissions)
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};

    return this.httpClient.put<User>(this.apiUrl, this.user, options)
  }
}
