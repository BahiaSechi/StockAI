import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { BehaviorSubject } from 'rxjs';
import { StrategieResult } from 'src/app/model/strategieResult';
import { StrategieService } from 'src/app/services/strategie/strategie.service';

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.css']
})
export class StrategieComponent implements OnInit {

  datas = new BehaviorSubject<StrategieResult[]>([]);

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private strats: StrategieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if (params['stratId'] != null && params['stratId'] != undefined && params['stratId'] != "") {
        this.strats.getStratInfos(params['stratId']).subscribe((x:StrategieResult[]) => {
          this.datas.next(x);
        });
      }
    });
  }
}
