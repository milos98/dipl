import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppLayoutComponent} from "./layout/containers/app-layout/app-layout.component";

const routes: Routes = [
    {
        path: 'dashboard',
        component: AppLayoutComponent,
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
