import { Component, Input, OnInit } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product} from '../model/product';

@Component({
  selector: 'tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss']
})
export class TileComponent implements OnInit {

  tiles = PRODUCTS;

  constructor() { }

  ngOnInit() { 
  }

}
