import { NgModule } from '@angular/core';

import {DashboardComponent} from './dashboard.component';
import {DashboardService} from './dashboard.service';
import { DashboardRoutingModule} from './dashboard.routing';
// import { AppModule } from './AppModule';
import {AppMaterialModule} from '../app.material'
import { FlexLayoutModule } from '@angular/flex-layout';
import {MoviesListComponent} from '../movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DashboardComponent,
    MoviesListComponent
  ],
  imports: [
    FormsModule,
    AppMaterialModule,
    DashboardRoutingModule,
    FlexLayoutModule
    
  ],
  providers: [DashboardService]
})
export class DashboardModule { }
