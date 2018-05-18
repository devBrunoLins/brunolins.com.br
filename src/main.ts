import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import  Configuration from '../configuration';

if (Configuration.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
