import {Component, Input, OnInit} from '@angular/core';
import {ChartDataSets, ChartType} from "chart.js";
import {Color, Label} from "ng2-charts";
import {Stock} from "../../model/stock";

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {

  @Input()
  public getterBroker: Stock[];

  public lineChartData: ChartDataSets[] = [
    { data: [5, 4 ,14], label: 'AAPL'}
  ]
  public lineChartOptions = {
    responsive: true,
  };
  public lineChartLabels: Label[] = [];
  public lineChartType: ChartType = 'line';
  public lineChartColors: Color[] = [
    {
      borderColor: 'rgb(156,255,171)'
    },
    {
      borderColor: 'rgb(229,146,255)'
    },
    {
      borderColor: 'rgb(143,151,255)'
    }
  ];

  public lineChartLegend = true;

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }


  constructor() { }

  ngOnInit(): void {
  }

}
