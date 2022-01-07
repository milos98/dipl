import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { TopbarComponent } from './components/topbar/topbar.component';

@NgModule({
    declarations: [
        SidebarComponent,
        TopbarComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule
    ],
    exports: [
        SidebarComponent,
        TopbarComponent
    ]
})
export class SharedModule { }
