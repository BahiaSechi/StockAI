import {AfterViewInit, Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import {Stock} from "../../model/stock";
import {BehaviorSubject} from "rxjs";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input()
  public getterBroker = new BehaviorSubject<Stock[]>([]);

  public lineChartData = new BehaviorSubject<ChartDataSets[]>([]);
  public lineChartOptions = {
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
          labelString: 'Date'
        },
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Price'
        }
      }]
    }
  };
  public lineChartLabels: Label[] = [];
  public lineChartType: ChartType = 'line';
  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgb(230,234,255, 0.5)',
      borderColor: 'rgb(143,151,255)'
    }
  ];
  public lineChartLegend = true;

  constructor() { }

  ngOnInit(): void {

    this.getterBroker.subscribe(myBroker => {

      if (myBroker == null || myBroker.length == 0) return;

      let temp = [];

      myBroker.forEach(v => {
        let myValues = [];
        if (v == undefined) return;
        v.values.forEach(val => {
          myValues.push({y: val.value, x: new Date(val.timestamp)});
        });
        temp.push({data: myValues, label: v.abreviation});
      });
      this.lineChartData.next(temp);
    });
  }

}
