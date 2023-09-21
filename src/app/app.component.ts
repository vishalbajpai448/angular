import { Component } from '@angular/core';
import { WeatherServiceService } from './weather-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'files_folder';

  weatherDataLko:any;
  weatherDataRbl:any;

  constructor(private weatherService:WeatherServiceService)
  {
    this.fetchWeatherData();
  }

  fetchWeatherData()
  {
    this.weatherService.getWeather('Lucknow').subscribe(
      (data)=>{
        this.weatherDataLko = data;
      })

      this.weatherService.getWeather('Rae Bareli').subscribe(
        (data)=>{
          this.weatherDataRbl = data;
        })
  }
  
}
