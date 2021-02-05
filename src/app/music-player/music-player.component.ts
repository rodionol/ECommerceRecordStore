import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-music-player',
  templateUrl: './music-player.component.html',
  styleUrls: ['./music-player.component.css']
})
export class MusicPlayerComponent implements OnInit {
  
  @ViewChild("recordplayer", {static:true}) recordplayer:ElementRef;
  @ViewChild("audio", {static: true}) audio:ElementRef;
  @ViewChild("percentplayed", {static:true}) percentplayed: ElementRef;
  @ViewChild("listofrecords", {static: true}) listofrecords: ElementRef;
  activeTrack: number = 0;
  playTrack;

  constructor() { }

  ngOnInit() {
  }


  
  getTrack(track:number) {
    return this.listofrecords.nativeElement.querySelectorAll('li>.music-card')[track];
  }

  getButton(track:number) {
    return this.listofrecords.nativeElement.querySelectorAll('.music-card button')[track];
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
