import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutComponent } from './containers/app-layout/app-layout.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { TopbarComponent } from "./components/topbar/topbar.component";

@NgModule({
    declarations: [
        AppLayoutComponent,
        SidebarComponent,
        TopbarComponent
    ],
    exports: [
        AppLayoutComponent,
        SidebarComponent,
        TopbarComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule
    ]
})
export class LayoutModule { }
