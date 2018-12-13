import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonModule, MatInputModule } from '@angular/material';

@NgModule({
    imports: [ MatButtonModule, MatInputModule],
    exports: [MatCardModule, MatButtonModule],
    declarations: [],
    entryComponents: [],
    bootstrap: [],
    providers: []
    
})

export class AppMaterialModule{};

