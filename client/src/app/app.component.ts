import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
    sidebarOpen = true;

    toggleSidebar() {
        this.sidebarOpen = !this.sidebarOpen;
        console.log('aaa');
    }
}
