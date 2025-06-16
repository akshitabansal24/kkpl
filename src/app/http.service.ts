import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  constructor(private http: HttpClient) {}

  getReports(): Observable<any> {
    return this.http.get(this.apiUrl + 'getReports');
  }

  getReportData(reportRequest: any): Observable<any> {
    return this.http.post(this.apiUrl + 'reportData', reportRequest, { responseType: 'json' });
  }

  updateReport(reportRequest: any): Observable<any> {
    return this.http.post(this.apiUrl + 'updateReportData', reportRequest, { responseType: 'json' });
  }
}
