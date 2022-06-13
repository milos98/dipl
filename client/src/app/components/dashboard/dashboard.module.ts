import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DashboardComponent } from './containers/dashboard/dashboard.component';
import { CounterComponent } from './components/counter/counter.component';
import { FilterComponent } from './components/filter/filter.component';
import { TableWrapperComponent } from './components/table-wrapper/table-wrapper.component';
import { DataTableComponent } from './components/data-table/data-table.component';
import { WidgetsModule } from "../../widgets/widgets.module";



@NgModule({
  declarations: [
    DashboardComponent,
    CounterComponent,
    FilterComponent,
    TableWrapperComponent,
    DataTableComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    WidgetsModule
  ],
  exports: [
      DashboardComponent
  ]
})
export class DashboardModule { }
