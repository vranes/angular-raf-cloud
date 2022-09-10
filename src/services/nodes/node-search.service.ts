import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Observable} from "rxjs";
import {Node, UserWrapper} from "../../model/model";

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
    return this.httpClient.get<Node[]>(this.apiUrl + '/all', options)
  }

  search(name: string, statusStr: string, dateFrom: string, dateTo: string): Observable<Node[]> {

    let status: string[] = statusStr.split(',')

    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });

    let params = new HttpParams();
    params = params.append('name', name).append('status', status.toString())
    if(dateFrom != '' && dateTo != '')
      params = params.append('dateFrom', dateFrom).append('dateTo', dateTo)

    let options = {headers: headers, params: params};
    return this.httpClient.get<Node[]>(this.apiUrl, options)
  }

  delete(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let options = {headers: headers};
    return this.httpClient.delete(`${this.apiUrl}/${id}`, options)
  }

  start(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/start`, options)
  }

  stop(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/stop`, options)
  }

  restart(id: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id);
    let options = {headers: headers, params: params};
    return this.httpClient.get(`${this.apiUrl}/restart`, options)
  }

}
