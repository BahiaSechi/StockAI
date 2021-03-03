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

  datas = new BehaviorSubject<StrategieResult[]>([]);

  constructor(
    private strats: StrategieService
  ) { }

  ngOnInit(): void {

    this.strats.getStratInfos("a").subscribe(lam => {
      this.datas.next(lam);
    });
  }

}
