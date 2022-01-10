import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './containers/employeee/employee.component';
import { CounterComponent } from './components/counter/counter.component';
import { FilterComponent } from './components/filter/filter.component';
import { EmployeeTableWrapperComponent } from './components/employee-table-wrapper/employee-table-wrapper.component';
import { DataTableComponent } from './components/data-table/data-table.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    CounterComponent,
    FilterComponent,
    EmployeeTableWrapperComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  exports: [
      EmployeeComponent
  ]
})
export class DashboardModule { }
