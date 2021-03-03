import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import { StrategieResult } from 'src/app/model/strategieResult';
import { StrategieService } from 'src/app/services/strategie/strategie.service';
import {Strategie} from "../../model/strategie";

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.css']
})
export class StrategieComponent implements OnInit {

  datas = new BehaviorSubject<Strategie[]>([]);
  last = new BehaviorSubject<StrategieResult>(null);
  description : string;

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private strats: StrategieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      if (params['stratId'] != null && params['stratId'] != undefined && params['stratId'] != "") {
        this.description = this.strats.getStratDesc(params['stratId']);
        this.strats.getStratInfos(params['stratId']).subscribe((x:StrategieResult[]) => {
          this.datas.next([{id: params['stratId'], res: x}]);
          this.last.next(x[x.length-1]);
        });
      }
    });
  }
}
