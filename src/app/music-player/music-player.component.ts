import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from '../model/product';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.scss']
})
export class MusicPlayerComponent implements OnInit {
  
  featuredRecords: Array<Product> = [
    {id: 9001, productImageUrl: '', recordTitle: 'Let\s fall in love for the night', artist: 'Finneas', year: '', price: 0.00, genre: ''},
    {id: 9002, productImageUrl: '', recordTitle: 'Someone you love', artist: 'Lewis Capaldi', year: '', price: 0.00, genre: ''},
    {id: 9003, productImageUrl: '', recordTitle: 'Lovely', artist: 'Billie Eilish, Khalid', year: '', price: 0.00, genre: ''},
    {id: 9004, productImageUrl: '', recordTitle: 'Como Los 90\'s (Bachata Version)', artist: 'Kewin Cosmos', year: '', price: 0.00, genre: ''},
    {id: 9005, productImageUrl: '', recordTitle: 'Hang On Little Tomato', artist: 'Pink Martini', year: '', price: 0.00, genre: ''}
];
  @ViewChild("recordplayer", {static:true}) recordplayer:ElementRef;
  @ViewChild("audio", {static: true}) audio:ElementRef;
  @ViewChild("percentplayed", {static:true}) percentplayed: ElementRef;
  @ViewChild("listofrecords", {static: true}) listofrecords: ElementRef;
  activeTrack: number = 0;
  playTrack;

  constructor() { }

  ngOnInit() {
  }

  setTabindex(track:number) {
    let allcards = this.listofrecords.nativeElement.querySelectorAll('li>.music-card');
    allcards[track].setAttribute('tabindex', 0);
  }
  
  getTrack(track:number) {
    return this.listofrecords.nativeElement.querySelectorAll('li>.music-card')[track];
  }

  getButton(track:number) {
    return this.listofrecords.nativeElement.querySelectorAll('.music-card button')[track];
  }

  switchTrack(track:number) {
    this.activeTrack = track;
    this.setTabindex(track);
    this.audio.nativeElement.setAttribute('src', '../../assets/audio/record' + track + '.mp3');
  }

  Play(track:number) {
      this.playTrack = setInterval(() => { 
        let totalTrack = this.audio.nativeElement.duration;
        let playedTrack = this.audio.nativeElement.currentTime;
        let percentPlayed = (playedTrack / totalTrack) * 100;
        this.getTrack(track).querySelectorAll('.percent-played')[0].style = "width: " + percentPlayed + "%;";
      }, 500);
      this.getButton(track).classList.remove('play');
      this.audio.nativeElement.play();
  }

  Pause(track:number) {
      this.getButton(track).classList.add('play');
      this.audio.nativeElement.pause();
      clearInterval(this.playTrack);
  }    

  playRecord(track:number) {
    const currentTrack = this.getTrack(track);
    if (!currentTrack.classList.contains('active')) {
       this.switchTrack(track);
       if (!this.recordplayer.nativeElement.classList.contains("spinning")) {
          this.recordplayer.nativeElement.classList.add("spinning");
          this.Play(track);
       } else {
          this.switchTrack(track);
          this.Play(track);
       }
    } else { 
       if (!this.recordplayer.nativeElement.classList.contains("spinning")) { 
          this.recordplayer.nativeElement.classList.add("spinning");
          this.Play(track);
       } else {
          this.recordplayer.nativeElement.classList.remove("spinning");
          this.Pause(track);
       }
    }  
 }


}
