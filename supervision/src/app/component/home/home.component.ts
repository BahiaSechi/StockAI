import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';
import {BehaviorSubject} from "rxjs";
import {Stock} from "../../model/stock";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  stock = new BehaviorSubject<Stock[]>([]);
  stocksName: BehaviorSubject<string[]>;
  stocks: BehaviorSubject<Stock[]>;

  constructor(
    private stocksService: StockService
  ) { }

  ngOnInit(): void {
    this.stocksName = this.stocksService.getStocksNames();
    this.stocks = this.stocksService.getStocks();

    this.stocksName.subscribe(x => {
      x.forEach(element => {
        this.stocksService.getStock(element);
      });
    });
  }
}
