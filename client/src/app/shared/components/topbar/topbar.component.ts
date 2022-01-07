import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent {
    @Input() openSidebar = true;
    @Input() pageName = 'Dashboard';
    @Output() toggleSidebar = new EventEmitter<void>();

    toggle() {
        this.toggleSidebar.emit();
    }

}
