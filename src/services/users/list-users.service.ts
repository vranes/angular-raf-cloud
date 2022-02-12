import { Injectable } from '@angular/core';
import {LoginService} from "../login.service";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";
import {UserWrapper} from "../../model/model";

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  private readonly apiUrl = environment.listUsersApiUrl
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAll(): Observable<UserWrapper[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.get<UserWrapper[]>(this.apiUrl, options)
  }
}
