import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private apiKey = 'b3e89b99e500e6a9642d8f8cdac42fef';

  constructor(private http : HttpClient) { }

  getWeather(location : string):Observable<any>
  {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${this.apiKey}`;
    return this.http.get(apiUrl);
  }
}
