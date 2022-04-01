import { Component, Input } from '@angular/core';
import { AuthService } from "../../../shared/auth/auth.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    @Input() open = true;
    @Input() adminPage = false;
    @Input() pageName = '';

    constructor(private authService: AuthService) {
    }

    logout() {
        this.authService.logout();
    }
}
