import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-feature',
  templateUrl: './product-feature.component.html',
  styleUrls: ['./product-feature.component.scss']
})
export class ProductFeatureComponent implements OnInit {
  productFeatures = [
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster5-1000x1000.jpg',
      category: 'Posters',
      name: 'Poster V1',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster6-1000x1000.jpg',
      category: 'Posters',
      name: 'Poster V2',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Poster4-1000x1000.jpg',
      category: 'Posters',
      name: 'Poster V3',
      price: '23.99'
    },
  ] 
  constructor() { }

  ngOnInit(): void {
  }

}
