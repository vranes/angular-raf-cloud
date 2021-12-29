import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {JwtWrapper} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwt: string
  private permissions: string
  private readonly loginApiUrl = environment.loginApiUrl
  private readonly  apiUrl = environment.apiUrl

  constructor(private httpClient: HttpClient) {
    this.jwt = localStorage.getItem("jwt") || ''
    this.permissions = localStorage.getItem("permissions") || ''
  }

  setToken(newToken: string): void {
    this.jwt = newToken
    localStorage.setItem("jwt", this.jwt)
  }

  setPermissions(newPermissions: string): void {
    this.permissions = newPermissions
    localStorage.setItem("permissions", this.permissions)
  }

  public getJwt(): string {
    return this.jwt
  }

  public getPermissions(): string {
    return this.permissions
  }

  login(email: string, password: string): Observable<JwtWrapper>{
    // let headers = new HttpHeaders({
    //   'Access-Control-Allow-Origin': '*'
    // });
    // let options = {headers: headers};
    return this.httpClient.post<JwtWrapper>(this.loginApiUrl, {email: email, password: password}, /*options*/)

  }

}
