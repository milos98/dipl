import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeadInfoComponent } from './lead-info/lead-info.component';
import { EmployeeInfoComponent } from './employee-info/employee-info.component';



@NgModule({
  declarations: [
    LeadInfoComponent,
    EmployeeInfoComponent
  ],
  imports: [
    CommonModule
  ]
})
export class WidgetsModule { }
