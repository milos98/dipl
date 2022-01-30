import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadInfoComponent } from './lead-info/lead-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        LeadInfoComponent,
        EmployeeInfoComponent
    ],
    exports: [
        LeadInfoComponent,
        EmployeeInfoComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ]
})
export class WidgetsModule { }
