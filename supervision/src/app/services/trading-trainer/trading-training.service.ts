import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Purchase } from 'src/app/model/purchase';
import { Stock } from 'src/app/model/stock';
import { StockService } from '../stock/stock.service';

@Injectable({
  providedIn: 'root'
})
export class TradingTrainingService {

  private walletWorth = new BehaviorSubject<number>(100.3);
  private wallet = new Map<string, number>();
  private purchase = new Map<string, Purchase[]>(); // Abreviation d'action et details d'achat
  private fiat = "FIAT";
  private subscribeStock = null;

  constructor(
    private stockService: StockService
  ) { 
    this.wallet.set(this.fiat, 100);
  }

  buy(s: Stock, quantity: number) {
    this.listenToStocks();
    const soldeAfterBuy = this.wallet.get(this.fiat) - quantity*s.values[s.values.length-1].value
    if (soldeAfterBuy < 0)
      return;

    if (!this.purchase.has(s.abreviation)) {
      this.purchase.set(s.abreviation, []);
      this.wallet.set(s.abreviation, 0);
    }
      
    this.purchase.get(s.abreviation).push({quantity: quantity, unitaryPurchasePrice : s.values[s.values.length-1].value, stockAbreviation: s.abreviation});
    this.wallet.set(s.abreviation, this.wallet.get(s.abreviation) + quantity);
    this.wallet.set(this.fiat, soldeAfterBuy);
  }

  sell(s: Stock, quantity: number) {
    if (!this.purchase.has(s.abreviation)) {
      return;
    }
    this.wallet.set(s.abreviation, this.wallet.get(s.abreviation) + quantity);
  }

  listenToStocks() {
    if (this.subscribeStock != null) return;

    this.subscribeStock = this.stockService.getStocks().subscribe(stocks => {
      let totalValue = 0;
      for (let entry of this.wallet.keys()) {
        const stock = stocks.find(s => s.abreviation == entry);
        const value = stock.values[stock.values.length-1].value;
        totalValue += value * this.wallet.get(entry);
      }
      this.walletWorth.next(totalValue);
    });
  }

  getWalletWorth() {
    return this.walletWorth;
  }
}
