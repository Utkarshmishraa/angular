import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes = [
    // { path: '', redirectTo: 'overview', pathMatch: 'full' },
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full' 
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    }
]

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);