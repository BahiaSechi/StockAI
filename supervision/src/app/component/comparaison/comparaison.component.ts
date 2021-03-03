import { Component, OnInit } from '@angular/core';
import { StrategieService } from 'src/app/services/strategie/strategie.service';
import {BehaviorSubject} from "rxjs";
import {StrategieResult} from "../../model/strategieResult";
import { InfoIa } from 'src/app/model/infoIa';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent implements OnInit {

  datas1 = new BehaviorSubject<StrategieResult[]>([]);
  datas2 = new BehaviorSubject<StrategieResult[]>([]);
  infosIa: InfoIa[] = [];

  constructor(
    private strats: StrategieService
  ) { }

  ngOnInit(): void {

    this.strats.getStratInfos("sma-rsi").subscribe(lam => {
      this.datas1.next(lam);
    });

    this.strats.getStratInfos("rsi").subscribe(lam => {
      this.datas2.next(lam);
    });

    this.strats.getIaInfos().subscribe(arg => {
      this.infosIa = [];
      arg.forEach(a => {
        let b = a.split(" ");
        this.infosIa.push({
          date: b[0],
          heure: b[1],
          fiat: parseInt(b[2]),
          nbBougthStocks: parseInt(b[3]),
          nom: b[4],
          totalPrice: parseInt(b[5])
      })
      });
    });
    
  }

}
