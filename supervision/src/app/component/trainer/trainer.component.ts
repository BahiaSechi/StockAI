import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { take } from 'rxjs/operators';
import { Stock } from 'src/app/model/stock';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-trainer',
  templateUrl: './trainer.component.html',
  styleUrls: ['./trainer.component.css']
})
export class TrainerComponent implements OnInit {

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
          console.log(element);
          this.stocksService.getStock(element);
        });
    });
  }

}
