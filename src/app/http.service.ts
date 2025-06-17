import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface User {
  id?: number;
  name: string;
}

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  private apiUrl = 'http://localhost:8080/';

  authorizationData = 'Basic ' + btoa('username' + ':' + 'password');

  headerOptions = {
      headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.authorizationData,
          'responseType': 'json'
      })
  };

  constructor(private http: HttpClient) {}

  getReports(): Observable<any> {
    return this.http.get(this.apiUrl + 'getReports');
  }

  getReportData(reportRequest: any): Observable<any> {
    return this.http.post(this.apiUrl + 'reportData', reportRequest);
  }

  updateReport(reportRequest: any): Observable<any> {
    return this.http.post(this.apiUrl + 'updateReportData', reportRequest, this.headerOptions);
  }
}
