import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLayoutComponent } from './containers/app-layout/app-layout.component';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
    declarations: [
        AppLayoutComponent
    ],
    exports: [
        AppLayoutComponent
    ],
    imports: [
        AppRoutingModule,
        CommonModule
    ]
})
export class LayoutModule { }
