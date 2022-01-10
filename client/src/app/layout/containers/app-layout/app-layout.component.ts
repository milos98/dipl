import { Component, HostListener } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from "@angular/router";

@Component({
  selector: 'app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss']
})
export class AppLayoutComponent {
  sidebarOpen = false;
  screenWidth = 0;
  pageName = '';

  constructor(private location: Location, private router: Router) {
    router.events.subscribe(() => {
      switch(location.path()) {
        case '/dashboard' : this.pageName = 'Dashboard';
          break;
        case '/new-lead' : this.pageName = 'Add a new lead';
          break;
      }
    })
    this.getScreenSize();
  }

  toggleSidebar() {
    this.sidebarOpen = !this.sidebarOpen;
  }

  @HostListener('window:resize', ['$event'])
  getScreenSize() {
    this.screenWidth = window.innerWidth;
    if(this.screenWidth < 500) {
      this.sidebarOpen = false;
    }
  }
}
