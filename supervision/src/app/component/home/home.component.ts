import { Component, OnInit } from '@angular/core';
import { StockService } from 'src/app/services/stock/stock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private stocks: StockService
  ) { }

  ngOnInit(): void {
    this.stocks.getStocksNames();
  }

}
