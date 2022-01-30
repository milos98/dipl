import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from "./components/dashboard/containers/employeee/employee.component"
import { CreateLeadComponent } from "./components/creation-form/containers/create-lead/create-lead.component";
import { ManagerComponent } from "./components/dashboard/containers/manager/manager.component";
import {
    CreateEmployeeComponent
} from "./components/creation-form/containers/create-employee/create-employee.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: EmployeeComponent,
    },
    {
        path: 'new-lead',
        component: CreateLeadComponent
    },
    {
        path: 'admin',
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                path: 'dashboard',
                component: ManagerComponent
            },
            {
                path: 'new-lead',
                component: CreateLeadComponent
            },
            {
                path: 'new-employee',
                component: CreateEmployeeComponent
            },
            {
                path: '**',
                redirectTo: 'dashboard'
            }
        ]
    },
    {
        path: '**',
        redirectTo: '/dashboard'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
