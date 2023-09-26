import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isOpenMenu: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  handleOpenMenuHambuger(){
    this.isOpenMenu = !this.isOpenMenu;
  }
}
