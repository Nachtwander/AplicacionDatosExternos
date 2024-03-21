import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
// Importamos el HttpClientModule aqui para usarlo en todo el proyecto
import { HttpClientModule } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  //importamos a la configuracion con importProvidersFrom
  providers: [provideRouter(routes), importProvidersFrom(HttpClientModule)]
};
