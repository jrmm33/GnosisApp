import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { TatwasComponent } from './tatwas/tatwas.component';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { SunriseSunsetService } from './services/sunrise-sunset.service';
import { StartComponent } from './start/start.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    TatwasComponent,
    StartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    SunriseSunsetService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
