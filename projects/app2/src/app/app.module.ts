import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SettingsPageComponent } from './pages/settings-page/settings-page.component';

// Definimos los Providers de forma aislada para compartirlos
const providers: any[] = [
  // Aquí pondríamos los providers de este módulo para esta aplicación
];
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    SettingsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers, // providers: providers (Se asume que si la clave y el valor son iguales, no hace falta poner el valor)
  bootstrap: [AppComponent]
})
export class AppModule { }



// Crearemos una Clase de tipo NGModule para compartir la estructura
// y el módulo de enrutado de esta palicación con la aplicación principal
// que en nuestro caso será App0

@NgModule({
  // Configuración, pero que como va a ser una réplica del módulo
  // principal, dejaremos vacío
})
export class App2SharedModule {
  // Cuando importemos este módulo, estaremos compartiendo
  // los metadatos de AppModule y sus providers con la
  // aplicación principal, que en nuestro caso es App0
  static forRoot(): ModuleWithProviders<any>{
    return {
      ngModule: AppModule,
      providers // providers: providers
    }
  }
}
