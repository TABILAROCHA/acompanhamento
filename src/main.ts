import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import {YourAppModule} from './app/app.module';


if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(YourAppModule)
  .catch(err => console.error(err));

