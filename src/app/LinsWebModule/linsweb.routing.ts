import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LinsWebComponent } from './components/linsweb.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { RegisterUserComponent } from './components/register-user/register-user.component';

const routes: Routes = [
    {
        path: '',
        component: LinsWebComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'home', component: HomeComponent },
            { path: 'register-user', component: RegisterUserComponent },
            { path: 'not-found', component: NotFoundComponent },
            { path: '**', redirectTo: 'not-found' }
        ]
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LinsWebRoutingModule { }
