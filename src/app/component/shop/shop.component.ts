import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  products = [
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard1-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V1',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV2-min-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V2',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/Postcard3-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V3',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/Postcard-6-min-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V4',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/10/PostcardV5-min-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V5',
      price: '23.99'
    },
    {
      image: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2021/08/PostcardV6-1000x1000.jpg',
      category: 'Postcards',
      name: 'Postcard V6',
      price: '23.99'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
