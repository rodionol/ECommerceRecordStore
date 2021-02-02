import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor() {
   }

  ngOnInit() {
  }
  highcharts =  Highcharts;
  chartOptions = {   
     chart : {
        plotBorderWidth: null,
        plotShadow: false,
        backgroundColor:null
     },
     title : {
        text: 'Available Products' ,
        style: {
           color: '#FFFFFF'
        }
          
     },
     plotOptions : {
        pie: {
           allowPointSelect: true,
           cursor: 'pointer',
           colors: [
              '#000000',
              '#FFFFFF'
           ],
           dataLabels: {
              enabled: false       
           },
     
           showInLegend: true
        }
     },
     series : [{
        type: 'pie',
        name: 'share',
        
        data: [
           ['availableProducts',25],
           ['unusedProducts', 75],
                 ]
     }]
  };

}
