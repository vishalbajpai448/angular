import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from  '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { WeatherServiceService } from './weather-service.service';
import { WeatherComponent } from './weather/weather.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ReactiveFormComponent,
    WeatherComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    WeatherServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
