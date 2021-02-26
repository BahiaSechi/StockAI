import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StockService {

  stocksName = new BehaviorSubject<string[]>([]);
  stocks = new BehaviorSubject<Stock[]>([]);

  constructor(
    private http : HttpService
    ) { }

  getStocksNames() {
    this.http.getHttp();
    this.http.getStocksNames().subscribe(names => {
      this.stocksName.next(names);
    });
    return this.stocksName;
  }

  getStocks(): BehaviorSubject<Stock[]> {
    return this.stocks;
  }

  getStock(abbreviation: string) {
    this.http.getStock(abbreviation).subscribe(stock => {
      var tmp = this.stocks.getValue();
      let idx = tmp.findIndex(x => x.abreviation==stock.abreviation)
      if (idx==-1) {
        tmp.push(stock);
      } else {
        tmp[idx] = stock;
      }

      this.stocks.next(tmp);
    });
  }


}
