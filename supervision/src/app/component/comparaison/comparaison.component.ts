import { Component, OnInit } from '@angular/core';
import { StrategieService } from 'src/app/services/strategie/strategie.service';
import {BehaviorSubject} from "rxjs";
import {StrategieResult} from "../../model/strategieResult";

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent implements OnInit {

  datas1 = new BehaviorSubject<StrategieResult[]>([]);
  datas2 = new BehaviorSubject<StrategieResult[]>([]);

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
  }

}
