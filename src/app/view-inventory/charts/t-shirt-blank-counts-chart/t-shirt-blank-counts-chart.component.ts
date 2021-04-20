import { Component, OnInit } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-t-shirt-blank-counts-chart',
  templateUrl: './t-shirt-blank-counts-chart.component.html',
  styleUrls: ['./t-shirt-blank-counts-chart.component.scss']
})
export class TShirtBlankCountsChartComponent implements OnInit {

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            max: 25,
            min: 0
          }
      }]
    }
  };
  public barChartLabels: Label[] = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];

  public barChartData: ChartDataSets[] = [
    { data: [5, 9, 8, 1, 6, 5, 4, 0, 0, 0] }
  ];

  constructor() { }

  ngOnInit() {
  }

}
