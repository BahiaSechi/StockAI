import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock/stock.service';
import {InfluxService} from "../../services/influx/influx.service";

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

  stocksName: BehaviorSubject<string[]>;
  stocks: BehaviorSubject<Stock[]>;
  stockName = new BehaviorSubject<string>(null);
  stock = new BehaviorSubject<Stock>(null);

  constructor(
    private stocksService: StockService,
    private router: Router,
    private route: ActivatedRoute,
    private influxService: InfluxService
  ) { }

  ngOnInit(): void {
    this.stocksName = this.stocksService.getStocksNames();
    this.stocks = this.stocksService.getStocks();
    this.stocksName.subscribe(x => {
        x.forEach(element => {
          this.stocksService.getStock(element);
        });
    });

    this.route.params.subscribe(params =>{
      if (params['stockId'] != null && params['stockId'] != undefined && params['stockId'] != "")
        this.stockName.next(params['stockId']);
        this.stock.next(this.stocks.getValue().find(x => params['stockId'] == x.abreviation));
    });

    this.influxService.queryAPI();

  }

  trade(s: Stock) {
    this.router.navigate(['trainer', s.abreviation]);
  }

}
