import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  url;
  apiKey = '9ad3d4f440284ccea5191857200204';

  constructor(private http: HttpClient) {

    this.url = 'http://api.weatherapi.com/v1/current.json?key=' + this.apiKey + '&q=';
    // console.log(this.url);
  }

  getWeather(state){
    // console.log(this.url + state);
    console.log("Api is working fine");
    // Dont forget to uncomment this line below
    return this.http.get(this.url + state);
    // return 0;
  }
}
