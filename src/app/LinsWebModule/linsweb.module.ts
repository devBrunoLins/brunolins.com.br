import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LinsWebRoutingModule } from './linsweb.routing';
import { Http } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import Components from './components/components';
import Services from './services/services';
// import { NgbDatepickerModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
// import { SharedModule } from '../shared/shared.module';
// import { ChartsModule, CHART_DIRECTIVES } from 'ng2-charts';




@NgModule({
    imports: [
        LinsWebRoutingModule,
        BrowserAnimationsModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [Components.declarations],
    providers: Services.providers,
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    exports: [
        Components.exports,
        LinsWebRoutingModule
    ]
})
export class LinsWebModule {
    public static forRoot(): ModuleWithProviders {
        return {
            ngModule: LinsWebModule,
            providers: Services.providers
        };
    }
    constructor() { }
}
