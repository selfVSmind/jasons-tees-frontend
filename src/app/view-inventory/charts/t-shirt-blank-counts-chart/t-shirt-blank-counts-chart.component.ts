import { WHITE_ON_BLACK_CSS_CLASS } from '@angular/cdk/a11y/high-contrast-mode/high-contrast-mode-detector';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
import { Label } from 'ng2-charts';

@Component({
  selector: 'app-t-shirt-blank-counts-chart',
  templateUrl: './t-shirt-blank-counts-chart.component.html',
  styleUrls: ['./t-shirt-blank-counts-chart.component.scss']
})
export class TShirtBlankCountsChartComponent implements OnInit {

  @Input() prices: Array<number>;

  public ngOnChanges(changes: SimpleChanges) {
    if ('prices' in changes) {
        this.barChartData[0].data = changes['prices'].currentValue;
     }
  }       

  public barChartOptions: ChartOptions = {
    responsive: true,
    scales : {
      yAxes: [{
         ticks: {
            max: 20,
            min: 0,
            fontColor: 'white'
          },
          gridLines: {
            color: 'grey'
          }
      }],
      xAxes: [{
        ticks: {
          fontColor: 'white'
        },
        gridLines: {
          color: 'grey'
        }
      }]
    }
  };
  public barChartLabels: Label[] = ['S', 'M', 'L', 'XL', '2XL', '3XL', '4XL', '5XL', '6XL', '7XL'];
  public barChartType: ChartType = 'bar';
  public barChartLegend = false;
  public barChartPlugins = [];
  public barChartColors: Array<any> = [
    { // first color
      backgroundColor: '#0288d1'
    }
  ];

  public barChartData: ChartDataSets[] = [];

  constructor() { }

  ngOnInit() {
    this.barChartData.push({ data: this.prices });
  }

}
