import { ModuleWithProviders } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { DashboardComponent }  from './dashboard.component';


const DashboardRoutes : Routes = [ 
    {
        path: '',
        component: DashboardComponent
    }
]

export const DashboardRoutingModule : ModuleWithProviders = RouterModule.forChild(DashboardRoutes);