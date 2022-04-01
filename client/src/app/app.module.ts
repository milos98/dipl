import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardModule } from './components/dashboard/dashboard.module';
import { LayoutModule } from './layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { WidgetsModule } from "./widgets/widgets.module";
import { CreationFormModule } from "./components/creation-form/creation-form.module";
import { AuthService } from "./shared/auth/auth.service";
import { AuthGuard } from "./core/auth.guard";
import { TokenInterceptorService } from "./core/token-interceptor.service";
import { ErrorInterceptor } from "./core/error-interceptor.service";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CreationFormModule,
        DashboardModule,
        HttpClientModule,
        LayoutModule,
        SharedModule,
        WidgetsModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        },
        {
            provide: HTTP_INTERCEPTORS,
            useClass: ErrorInterceptor,
            multi: true
        }
    ],
    exports: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
