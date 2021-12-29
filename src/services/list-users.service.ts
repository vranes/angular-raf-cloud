import { Injectable } from '@angular/core';
import {LoginService} from "./login.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {User} from "../model/model";
import {environment} from "../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  private readonly apiUrl = environment.listUsersApiUrl
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAll(): Observable<User[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.get<Array<User>>(this.apiUrl, options)
  }
}
