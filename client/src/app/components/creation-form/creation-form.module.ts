import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateLeadComponent } from './containers/create-lead/create-lead.component';
import { CreateEmployeeComponent } from './containers/create-employee/create-employee.component';
import { WidgetsModule } from "../../widgets/widgets.module";



@NgModule({
  declarations: [
    CreateLeadComponent,
    CreateEmployeeComponent
  ],
  imports: [
    CommonModule,
    WidgetsModule
  ]
})
export class CreationFormModule { }
