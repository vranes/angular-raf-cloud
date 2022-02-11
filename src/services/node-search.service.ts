import { Injectable } from '@angular/core';
import {environment} from "../environments/environment";
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginService} from "./login.service";
import {Observable} from "rxjs";
import {Node, UserWrapper} from "../model/model";

@Injectable({
  providedIn: 'root'
})
export class NodeSearchService {

  private readonly apiUrl = environment.nodesApiUrl
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  getAll(): Observable<Node[]> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.get<Node[]>(this.apiUrl, options)
  }

  search(name: string, statusStr: string, startDate: string, endDate: string): Observable<Node[]> {

    let status: string[] = statusStr.split(',')

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};

    let params = new HttpParams();
    params = params.append('name', name).append('status', status.toString()).append('startDate', startDate).append('endDate', endDate);

    return this.httpClient.get<Node[]>(this.apiUrl, options)

    // return this.httpClient.get<Node[]>(this.apiUrl, {
    //   name: name,
    //   dateFrom: startDate,
    //   dateTo: endDate,
    //   status: status,
    //   email: localStorage.getItem("email")
    // }, {
    //   headers: headers
    // })
  }
}
