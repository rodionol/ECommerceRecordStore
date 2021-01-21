import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @ViewChild("recordplayer", {static:true}) recordplayer:ElementRef;

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
  
  playPauseRandom() {
     if (!this.recordplayer.nativeElement.classList.contains("spinning")) {
         this.recordplayer.nativeElement.classList.add("spinning");
     } else {
         this.recordplayer.nativeElement.classList.remove("spinning");
     }
     
  }

}
