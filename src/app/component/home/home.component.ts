import { Component, OnInit } from '@angular/core';
import { NzIconModule } from 'ng-zorro-antd/icon';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  customers = [
    {
      context: 'Fast shipping and excellent customer service.The product was even better than expected. I will definitely be a returning customer.',
      avatar: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonial-avatar-img.jpeg',
      name: 'JENNIFER LEWIS'
    },
    {
      context: 'Great user experience on your website. I found exactly what I was looking for at a great price. I will definitely be telling my friends.',
      avatar: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-2.jpeg',
      name: 'ALICIA HEART'
    },
    {
      context: 'Thank you for the excellent shopping experience. It arrived quickly and was exactly as described. I will definitely be shopping with you again in the future.',
      avatar: 'https://websitedemos.net/earth-store-02/wp-content/uploads/sites/1171/2022/11/earth-store-testimonials-avatar-img-1.jpeg',
      name: 'JUAN CARLOS'
    },
  ]
  policies = [
    {
      icon: 'lock',
      title: 'SECURE PAYMENT',
      text: 'All our payments our SSL secured'
    },
    {
      icon: 'inbox',
      title: 'DELIVERED WITH CARE',
      text: 'Super fast shipping to your door'
    },
    {
      icon: 'heart',
      title: 'EXCELLENT SERVICE',
      text: 'Live chat and phone support'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
