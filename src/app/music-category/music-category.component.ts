import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'music-category',
  templateUrl: './music-category.component.html',
  styleUrls: ['./music-category.component.scss']
})
export class MusicCategoryComponent implements OnInit {
  genres: any[] = [
    {"name": "Rock"},
    {"name": "Jazz"},
    {"name": "Classical"},
    {"name": "House"},
    {"name": "Folk"},
    {"name": "Hip Hop"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
