import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './containers/employeee/employee.component';
import { CounterComponent } from './components/counter/counter.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    CounterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
      EmployeeComponent
  ]
})
export class DashboardModule { }
