import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   @ViewChild("recordplayer", {static:true}) recordplayer:ElementRef;
   @ViewChild("audio", {static: true}) audio:ElementRef;
   @ViewChild("percentplayed", {static:true}) percentplayed: ElementRef;
   @ViewChild("listofrecords", {static: true}) listofrecords: ElementRef;
   activeTrack: number = 0;
   playTrack;

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

   getTrack(track:number) {
      return this.listofrecords.nativeElement.querySelectorAll('li>.music-card')[track];
   }

   switchTrack(track:number) {
      this.activeTrack = track;
      this.audio.nativeElement.setAttribute('src', '../../assets/audio/record' + track + '.mp3');
   }

   Play(track:number) {
      this.playTrack = setInterval(() => { 
         let totalTrack = this.audio.nativeElement.duration;
         let playedTrack = this.audio.nativeElement.currentTime;
         let percentPlayed = (playedTrack / totalTrack) * 100;
         this.getTrack(track).querySelectorAll('.percent-played')[0].style = "width: " + percentPlayed + "%;";
      }, 500);
      this.audio.nativeElement.play();
   }

   Pause() {
      this.audio.nativeElement.pause();
      clearInterval(this.playTrack);
   }

   playRecord(track:number) {
      const currentTrack = this.getTrack(track);
      console.log('current track: ', currentTrack.classList);
      if (!currentTrack.classList.contains('active')) {
         // console.log('switch track pls');
         this.switchTrack(track);
         if (!this.recordplayer.nativeElement.classList.contains("spinning")) {
            this.recordplayer.nativeElement.classList.add("spinning");
            this.Play(track);
         } else {
            this.switchTrack(track);
            this.Play(track);
         }
      } else { 
         // console.log('current track playing already, pls pause');
         if (!this.recordplayer.nativeElement.classList.contains("spinning")) { 
            this.recordplayer.nativeElement.classList.add("spinning");
            this.Play(track);
         } else {
            this.recordplayer.nativeElement.classList.remove("spinning");
            this.Pause();
         }
      }
      
   }

}
