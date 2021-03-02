import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import { StrategieService } from 'src/app/services/strategie/strategie.service';

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.css']
})
export class StrategieComponent implements OnInit {

  constructor(
    private router : Router,
    private route: ActivatedRoute,
    private strats: StrategieService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if (params['stratId'] != null && params['stratId'] != undefined && params['stratId'] != "") {
        this.strats.getStratInfos(params['stratId']);
      }
    });
  }
}
