import {Component, Input, OnInit} from '@angular/core';
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
  public getterBroker: BehaviorSubject<Stock>;

  public lineChartData = new BehaviorSubject<ChartDataSets[]>([]);
  public lineChartOptions = {
    responsive: true,
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
  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  constructor() { }

  ngOnInit(): void {
    this.getterBroker.subscribe(myBroker => {

      if (myBroker == null) return

      let myValues = [];

      myBroker.values.forEach(v => {
        myValues.push({y: v.value, x: new Date(v.timestamp)});
      });

      console.log(myValues);
      this.lineChartData.next([{ data: myValues, label: myBroker.abreviation}]);
    });
  }

}
