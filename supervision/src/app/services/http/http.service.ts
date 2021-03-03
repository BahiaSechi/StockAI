import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import querystring from "querystring";
import { StrategieResult } from 'src/app/model/strategieResult';

@Injectable({
  providedIn: 'root'
})
export class HttpService {



  constructor(
    private http: HttpClient
  ) {
  }

  getStocksNames(): Observable<string[]> {
    let names = new BehaviorSubject<string[]>(['IXIC', 'AAPL', 'AMZN', 'FB', 'GOOGL', 'MSFT']);
    return names;
  }

  getHttp(abreviation: string): Observable<any> {
    let queryS = querystring.stringify({
      db: 'stockai',
      q: 'SELECT value FROM "stockai"."autogen"."high" WHERE "name"=\'' + abreviation + '\';'
    });
    return this.http.get("http://51.210.180.105:8086/query?" + queryS);
  }

  getHttpSecond(abreviation: string): Observable<any> {
    let queryS = querystring.stringify({
      db: 'stockai',
      q: 'SELECT value FROM "stockai"."autogen"."high" WHERE "name"=\'' + abreviation + '\' ORDER BY time DESC LIMIT 1;'
    });
    return this.http.get("http://51.210.180.105:8086/query?" + queryS);
  }

  getStratInfos(id: string): Observable<string> {
    //http://51.210.180.105:8081/res http://51.210.180.105:8081/stats
    //return new BehaviorSubject<string>("1042.91 41 AAPL 3179.96");

    return this.http.get("http://51.210.180.105:8081/res", {responseType: "text"});
  }

  getIAInfos(): Observable<string> {
    return this.http.get("http://51.210.180.105:8081/stats", {responseType: "text"});
  }

  private buildHeaders() {
    let headers: HttpHeaders = new HttpHeaders();

    headers = headers.append('Access-Control-Allow-Origin', '*');
    headers = headers.append('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    headers = headers.append("Access-Control-Allow-Methods", "GET, POST, DELETE, PUT");
    return headers;
  }
}
