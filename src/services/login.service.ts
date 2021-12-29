import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient} from "@angular/common/http";
import {JwtWrapper} from "../model/model";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private jwt: string
  private permissions: string[]
  private readonly loginApiUrl = environment.loginApiUrl

  constructor(private httpClient: HttpClient) {
    this.jwt = localStorage.getItem("jwt") || ''
    this.permissions = []
    let temp = (localStorage.getItem("permissions") || '').replace("[", "").replace("]", "").split(",")
    temp.forEach(p => this.permissions.push(p.replace(" ", "")))
  }

  setToken(newToken: string): void {
    this.jwt = newToken
    localStorage.setItem("jwt", this.jwt)
  }

  setPermissions(newPermissions: string): void {
    localStorage.setItem("permissions", newPermissions)
    let temp = newPermissions.replace('[', '').replace("]", "").split(',')
    this.permissions = []
    temp.forEach(p => this.permissions.push(p.replace(" ", "")))
  }

  public getJwt(): string {
    return this.jwt
  }

  public getPermissions(): string[] {
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
