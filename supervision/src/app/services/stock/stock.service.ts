import { Injectable } from '@angular/core';
import {BehaviorSubject, interval, Subscription} from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocksName = new BehaviorSubject<string[]>([]);
  stocks = new BehaviorSubject<Stock[]>([]);
  subscription = new Map<string, Subscription>();

  constructor(
    private http: HttpService
  ) {
  }

  getStocksNames() {
    this.http.getStocksNames().subscribe(names => {
      this.stocksName.next(names);
    });
    return this.stocksName;
  }

  getStocks(): BehaviorSubject<Stock[]> {
    return this.stocks;
  }

  getStock(abbreviation: string) {
    const source = interval(2000);

    this.http.getHttp(abbreviation).subscribe(o => {
      let valuesArr = [];
      o.results[0].series[0].values.forEach(vArray => {
        valuesArr.push({timestamp: vArray[0], value: vArray[1]});
      });

      let tmp = this.stocks.getValue();
      let idx = tmp.findIndex(x => x.abreviation == abbreviation);
      let stock: Stock = this.getStockInfos(abbreviation);
      stock.values = valuesArr;

      if (idx == -1) {
        tmp.push(stock);
      } else {
        tmp[idx] = stock;
      }
      this.stocks.next(tmp);
    });

    if (this.subscription.has(abbreviation)) return;

    this.subscription.set(abbreviation, source.subscribe(val => {
      this.http.getHttpSecond(abbreviation).subscribe(o => {
        let valuesArr = [];
        valuesArr.push({timestamp: o.results[0].series[0].values[0][0], value: o.results[0].series[0].values[0][1]});

        let tmp = this.stocks.getValue();
        let idx = tmp.findIndex(x => x.abreviation == abbreviation);
        let stock: Stock = tmp[idx];

        stock.values.push(valuesArr[0]);

        if (idx == -1) {
          tmp.push(stock);
        } else {
          tmp[idx] = stock;
        }
        this.stocks.next(tmp);
      });
    }));
  }

  getStockInfos(abbreviation: string): Stock {
    // avec un timestamp : new Date(1613031420000)

    let ix = {name: "NASDAQ", abreviation: "IXIC", values: [], picture: 'nasdaq.png'};
    let ap = {name: "Apple", abreviation: "AAPL", values: [], picture: 'ap.png'};
    let am = {name: "Amazon", abreviation: "AMZN", values: [], picture: 'amazon.png'};
    let fb = {name: "Facebook", abreviation: "FB", values: [], picture: 'fb.png'};
    let go = {name: "Google", abreviation: "GOOGL", values: [], picture: 'go.png'};
    let ms = {name: "Microsoft", abreviation: "MSFT", values: [], picture: 'microsoft.png'};

    switch (abbreviation) {
      case 'IXIC':
        return ix;
      case 'AAPL':
        return ap;
      case 'AMZN':
        return am;
      case 'FB':
        return fb;
      case 'GOOGL':
        return go;
      case 'MSFT':
        return ms;
      default:
        break;
    }
    return ix;
  }

  ngOnDestroy() {
    this.subscription.forEach((value: Subscription, key: string) => {
      value.unsubscribe();
    });
  }

}
