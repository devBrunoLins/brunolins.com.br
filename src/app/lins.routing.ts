import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
    {
        path: '',
        // canActivate: [LoginGuard],
        loadChildren: './LinsWebModule/linsweb.module#LinsWebModule'
    },
    // {
    //     path: 'investimentos',
    //     // canActivate: [LoginGuard],
    //     loadChildren: './spa-ratweb/ratweb.module#RATWebModule'
    // },
    // { path: 'login', component: LoginComponent },
    // { path: 'connection-instructions', component: ConnectionInstructionsComponent },
    // { path: 'error-ibpj', component: ErrorPageComponent },
    // { path: 'health-check', component: HealthCheckComponent },
    // {
    //     path: '',
    //     pathMatch: 'full',
    //     // canActivate: [LoginGuard],
    //     children: [
    //         { path: '', loadChildren: './LinsWebModule/linsweb.module#LinsWebModule' },
    //     ]
    // },
    { path: '**', redirectTo: 'not-found' }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})

export class LinsRoutingModule { }
