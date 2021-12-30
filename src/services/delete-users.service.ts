import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {User, UserWrapper} from "../model/model";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {environment} from "../environments/environment";
import {LoginService} from "./login.service";

@Injectable({
  providedIn: 'root'
})
export class DeleteUsersService {
  private readonly apiUrl = environment.apiUrl
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  deleteUser(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};

    return this.httpClient.delete(`${this.apiUrl}/${id}`, options)
  }
}
