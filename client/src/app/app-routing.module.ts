import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from "./components/dashboard/containers/dashboard/dashboard.component"
import { CreateLeadComponent } from "./components/creation-form/containers/create-lead/create-lead.component";
import {
    CreateEmployeeComponent
} from "./components/creation-form/containers/create-employee/create-employee.component";
import { AuthComponent } from "./layout/containers/auth/auth.component";
import { AppLayoutComponent } from "./layout/containers/app-layout/app-layout.component";
import { AuthGuard } from "./core/auth.guard";
import { AdminGuard } from "./core/admin.guard";

const routes: Routes = [
    {
        path: 'auth',
        component: AuthComponent
    },
    {
        path: '',
        component: AppLayoutComponent,
        canActivateChild: [AuthGuard],
        children: [
            {
                path: '',
                redirectTo: 'dashboard',
                pathMatch: 'prefix'
            },
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'new-lead',
                component: CreateLeadComponent
            },
            {
                path: 'admin',
                canActivateChild: [AdminGuard],
                children: [
                    {
                        path: '',
                        redirectTo: 'dashboard',
                        pathMatch: 'prefix'
                    },
                    {
                        path: 'dashboard',
                        component: DashboardComponent
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
