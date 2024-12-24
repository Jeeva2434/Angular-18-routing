import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';

import { routes } from './app.routes';
import { HTTP_INTERCEPTORS, provideHttpClient, withInterceptors, withInterceptorsFromDi } from '@angular/common/http';
import { apiMonitorInterceptor } from './core/interceptors/api-monitor.interceptor';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ 
      eventCoalescing: true 
    }), 
    provideRouter(routes,withComponentInputBinding()),
    provideHttpClient(
      withInterceptors(
        [
          apiMonitorInterceptor
        ]
      )
      // withInterceptorsFromDi()
    ), provideAnimationsAsync()
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useFactory: apiMonitorInterceptor,
    //   multi:true 
    // }
  ]
};
