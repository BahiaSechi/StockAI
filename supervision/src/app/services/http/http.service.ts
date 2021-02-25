import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Stock } from 'src/app/model/stock';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  getStocksNames(): Observable<string[]> {
    var names = new BehaviorSubject<string[]>(['IXIC','AAPL','AMZN','FB','GOOGL','MSFT']);
    return names;
  }

  getStock(abbreviation: string): Observable<Stock> {
    // avec un timestamp : new Date(1613031420000)

    var ix = new BehaviorSubject<Stock>({name: "NASDAQ",
      abreviation: "IXIC",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 10.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 8.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 12.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 14.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 8.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 15.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 16.5},],
      picture: 'nasdaq.png'});
    var ap = new BehaviorSubject<Stock>({name: "Apple",
      abreviation: "AAPL",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 10.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 28.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 14.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 8.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 16.5},],
      picture: 'ap.png'});
    var am = new BehaviorSubject<Stock>({name: "Amazon",
      abreviation: "AMZN",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 5.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 8.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 5.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 14.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 8.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 5.5},],
      picture: 'amazon.png'});
    var fb = new BehaviorSubject<Stock>({name: "Facebook",
      abreviation: "FB",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 10.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 5.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 12.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 5.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 15.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 56.5},],
      picture: 'fb.png'});
    var go = new BehaviorSubject<Stock>({name: "Google",
      abreviation: "GOOGL",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 10.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 12.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 14.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 15.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 16.5},],
      picture: 'go.png'});
    var ms = new BehaviorSubject<Stock>({name: "Microsoft",
      abreviation: "MSFT",
      values: [ {timestamp: new Date().getTime() - 60000 * 3600 * 11, value: 10.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 10, value: 11.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 9, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 8, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 7, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 6, value: 12.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 5, value: 13.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 4, value: 14.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 3, value: 12.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 2, value: 13.5},
                {timestamp: new Date().getTime() - 60000 * 3600 * 1, value: 15.0},
                {timestamp: new Date().getTime() - 60000 * 3600 * 0, value: 16.5},],
      picture: 'microsoft.png'});

    switch (abbreviation) {
      case 'IXIC': return ix;
      case 'AAPL': return ap;
      case 'AMZN': return am;
      case 'FB': return fb;
      case 'GOOGL': return go;
      case 'MSFT': return ms;
      default:
        break;
    }
    return ix;
  }
}
