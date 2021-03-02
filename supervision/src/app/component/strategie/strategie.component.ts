import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-strategie',
  templateUrl: './strategie.component.html',
  styleUrls: ['./strategie.component.css']
})
export class StrategieComponent implements OnInit {

  constructor(
    private router : Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params =>{
      if (params['stratId'] != null && params['stratId'] != undefined && params['stratId'] != "") {
        // RECUP STRATEGIE
      }
    });
  }
}
