import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { HttpClient } from "@angular/common/http";
import querystring from "querystring";

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  constructor(
    private http : HttpClient
  ) { }

  getStocksNames(): Observable<string[]> {
    let names = new BehaviorSubject<string[]>(['IXIC','AAPL','AMZN','FB','GOOGL','MSFT']);
    return names;
  }

  getHttp(abreviation: string) : Observable<any> {
    let queryS = querystring.stringify({
      db: 'stockai',
      q: 'SELECT value FROM "stockai"."autogen"."high" WHERE "name"=\''+abreviation+'\';'
    });
    return this.http.get("http://51.210.180.105:8086/query?"+ queryS);
       //.subscribe((o: httpResults) => {
    //   console.log("Inside get HTTP", o);
    //   console.log("Results", o.results[0].series[0].values[0][0]);
    }
}
