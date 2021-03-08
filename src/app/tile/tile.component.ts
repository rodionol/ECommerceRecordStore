import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  tiles = [
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "A Big Orange", artist: "Aubrey", year:"2020",price:"$21.00"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Day After Tomorrow", artist: "Funky Monkey ", year:"2021",price:"$17.50"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Hot Air Balloon", artist: "The Dramatic Duo", year:"2021",price:"$18.50"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Leaving Town", artist: "Tobi", year:"2020",price:"$15.00"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Freaking Out (Remix)", artist: "Icy Volcano", year:"2021",price:"$22.00"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Mending A Broken Heart", artist: "Icy Volcano", year:"2020",price:"$18.50"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Yes, Yes", artist: "Vinci", year:"2019",price:"$14.00"},
    {productImageUrl:"/assets/images/blue_vinyl.png", recordTitle: "Light Out", artist: "Dance House", year:"2019",price:"$14.00"},
  ];

  constructor() { }

  ngOnInit() {
  }

}
