import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { HttpClient } from "@angular/common/http";
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

  getStratInfos(): Observable<string> {
    return new BehaviorSubject<string>("1042.91 41 AAPL 3179.96");
    
  }
}
