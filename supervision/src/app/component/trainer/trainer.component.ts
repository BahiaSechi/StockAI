import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock/stock.service';
import { TradingTrainingService } from 'src/app/services/trading-trainer/trading-training.service';
import { InfluxService } from "../../services/influx/influx.service";
import { MessageService } from 'primeng/api';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css'],
  providers: [MessageService]
})
export class TrainerComponent implements OnInit {

  stocksName: BehaviorSubject<string[]>;
  stocks: BehaviorSubject<Stock[]>;
  stockName = new BehaviorSubject<string>(null);
  stock = new BehaviorSubject<Stock>(null);
  buyingPrice: number = 0;
  sellingPrice: number = 0;
  walletWorth = new BehaviorSubject<number>(100);
  fiatWorth = new BehaviorSubject<number>(100);

  constructor(
    private trainer: TradingTrainingService,
    private stocksService: StockService,
    private router: Router,
    private route: ActivatedRoute,
    private influxService: InfluxService,
    private messageService: MessageService
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

    this.trainer.getWalletWorth().subscribe(worth => {
      this.walletWorth.next(worth);
    });
  }

  trade(s: Stock) {
    this.router.navigate(['trainer', s.abreviation]);
  }

  isPriceOk(price: number): boolean {
    console.log(price, price != null, price != undefined, price > 0);
    return  price != null && price != undefined && price > 0;
  }

  sell() {
    if (!this.isPriceOk(this.sellingPrice)) {
      this.messageService.add({severity:'error', summary: 'Error', detail: 'The price is invalid. Please chose an amount between 0€ and ' + this.fiatWorth.value + '€.'})
    }
  }

}
