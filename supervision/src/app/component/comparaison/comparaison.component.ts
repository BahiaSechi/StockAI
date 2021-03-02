import { Component, OnInit } from '@angular/core';
import { StrategieService } from 'src/app/services/strategie/strategie.service';

@Component({
  selector: 'app-comparaison',
  templateUrl: './comparaison.component.html',
  styleUrls: ['./comparaison.component.css']
})
export class ComparaisonComponent implements OnInit {

  constructor(
    private strats: StrategieService
  ) { }

  ngOnInit(): void {
    this.strats.getStratInfos("a");
  }

}
