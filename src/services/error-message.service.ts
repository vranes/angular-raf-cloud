import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {ErrorMessage, Node} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class ErrorMessageService {

  private readonly apiUrl = environment.errorsApiUrl

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAll(): Observable<ErrorMessage[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.get<ErrorMessage[]>(this.apiUrl, options)
  }
}
