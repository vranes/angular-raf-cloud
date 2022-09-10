import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from "@angular/common/http";
import {LoginService} from "../login.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NodeScheduleService {

  private readonly apiUrl = environment.nodesApiUrl
  constructor(private httpClient: HttpClient, private loginService: LoginService) { }

  schedule(id: string, date: string, operation: string): Observable<any> {
    let headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.loginService.getJwt()
    });
    let params = new HttpParams();
    params = params.append('id', id).append('date', date).append('operation', operation);
    let options = {headers: headers, params: params};
    return this.httpClient.post(this.apiUrl + "/schedule", {}, options)
  }
}
