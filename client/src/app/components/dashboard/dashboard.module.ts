import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { EmployeeComponent } from './containers/employeee/employee.component';
import { CounterComponent } from './components/counter/counter.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { ManagerComponent } from './containers/manager/manager.component';
import { WidgetsModule } from "../../widgets/widgets.module";



@NgModule({
  declarations: [
    EmployeeComponent,
    CounterComponent,
    FilterComponent,
    TableWrapperComponent,
    DataTableComponent,
    ManagerComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetsModule
  ],
  exports: [
      EmployeeComponent
  ]
})
export class DashboardModule { }
