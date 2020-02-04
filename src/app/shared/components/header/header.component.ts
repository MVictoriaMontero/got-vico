import { Component, OnInit, Input } from '@angular/core';
import {RouterModule, Router, NavigationEnd } from 'node_modules/@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  hideElement = false;
  constructor(public router: Router) {
  }

  ngOnInit() {
  }

  handleSearch(value: string){
    console.log(value);
  }
  routeIsActive(routePath: string) {
    return this.router.url === routePath;
  }

  routeHowActive(routePath: string)
  {
    return this.router.url.includes(routePath);
  }

}
