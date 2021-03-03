import {Component, Input, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {ChartDataSets, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import {StrategieResult} from "../../model/strategieResult";

@Component({
  selector: 'app-chart-strat',
  templateUrl: './chart-strat.component.html',
  styleUrls: ['./chart-strat.component.css']
})
export class ChartStratComponent implements OnInit {

  @Input()
  public getterStrat = new BehaviorSubject<StrategieResult[]>([]);

  public StratChartData = new BehaviorSubject<ChartDataSets[]>([{data: [], label: "Stratégie SMA-RSI"}]);
  public StratChartOptions = {
    responsive: true,
    animation: {
      duration: 0 // general animation time
    },
    scales: {
      xAxes: [{
        type: 'time',
        time: {
          displayFormats: {
            quarter: 'MMM YYYY'
          }
        },
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Temps'
        },
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Résultat'
        }
      }]
    }
    // plugins: {
    //   zoom: {
    //     pan: {
    //       enabled: true,
    //       mode: 'xy'
    //     },
    //     zoom: {
    //       enabled: true,
    //       mode: 'xy'
    //     }
    //   }
    // }
  };
  public StratChartLabels: Label[] = [];
  public StratChartType: ChartType = 'line';
  public StratChartColors: Color[] = [
    {
      backgroundColor: 'rgb(230,234,255, 0.5)',
      borderColor: 'rgb(143,151,255)'
    }
  ];
  public StratChartLegend = true;

  constructor() { }

  ngOnInit(): void {
    this.getterStrat.subscribe(myBroker => {

      if (myBroker == null || myBroker.length == 0) return;

      let myValues = [];
      let v;
      let temp = this.StratChartData.value;
      temp = [... temp];
      v = myBroker[myBroker.length-1];
      myValues = temp[0].data;

      myValues.push({y :(v.stock_value + v.money - 1000), x: new Date()});

      temp[0].data = myValues;

      this.StratChartData.next(temp);
      console.log("MyValues", myValues);
    });

  }

}