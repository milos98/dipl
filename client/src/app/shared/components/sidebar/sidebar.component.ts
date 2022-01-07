import { Component, Input } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input() open = true;

    route = '/dashboard';

    constructor(private location: Location, private router: Router) {
        router.events.subscribe(() => {
            if(location.path() === '') {
                this.route = '/dashboard';
            } else {
                this.route = location.path();
            }
        })
    }

}
