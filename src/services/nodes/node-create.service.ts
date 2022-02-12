import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Observable} from "rxjs";
import {Node} from "../../model/model";

@Injectable({
  providedIn: 'root'
})
export class NodeCreateService {

  private readonly apiUrl = environment.nodesApiUrl

  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  create(name: string): Observable<Node> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });

    let options = {headers: headers};
    return this.httpClient.post<Node>(this.apiUrl, {
      name
    }, options)
  }



}
