import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'music-category',
  templateUrl: './music-category.component.html',
  styleUrls: ['./music-category.component.scss']
})
export class MusicCategoryComponent implements OnInit {
  public genres: any[] = [
    {"name": "Rock"},
    {"name": "Jazz"},
    {"name": "Classical"},
    {"name": "House"},
    {"name": "Folk"},
    {"name": "Hip Hop"},
    {"name": "All"}
  ];
  
  @Output() filterRequest = new EventEmitter<String>();

  filterMusic(category : String) {
    console.log("filter music", category);
    this.filterRequest.emit(category);
  }

  constructor() { }

  ngOnInit() {
  }

}
