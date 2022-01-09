import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from "./layout/containers/app-layout/app-layout.component";
import { EmployeeComponent } from "./components/dashboard/containers/employeee/employee.component"

const routes: Routes = [
    {
        path: 'dashboard',
        component: EmployeeComponent,
    },
    {
        path: 'new-lead',
        component: AppLayoutComponent,
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
