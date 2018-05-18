import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { LinsWebModule } from './LinsWebModule/linsweb.module';
import { LinsComponent } from './lins.component';
import { LinsWebComponent } from './LinsWebModule/components/linsweb.component';
import { NotFoundComponent } from './LinsWebModule/components/not-found/not-found.component';
import { LinsRoutingModule } from './lins.routing';

@NgModule({
  declarations: [
    LinsComponent,
    LinsWebComponent,
    NotFoundComponent
  ],
  imports: [
    HttpModule,
    // Import news modules
    LinsWebModule,
    BrowserModule,
    LinsRoutingModule
  ],
  providers: [],
  bootstrap: [LinsComponent]
})
export class AppModule { }
