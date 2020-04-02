import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  weather: any;
  location: string;
  temperature: string;
  humidity: string;
  feels: string;
  wind: string;
  icon: any;
  time: any;

  constructor(private weatherService: WeatherService) {
    this.location = 'Johor Bahru';
  }

  ngOnInit(): void {

    this.weatherService.getWeather(this.location)
    .subscribe(weather => {
      this.weather = weather.current.condition.text;
      this.temperature = weather.current.temp_c;
      this.humidity = weather.current.humidity;
      this.feels = weather.current.feelslike_c;
      this.wind = weather.current.wind_kph;
      this.icon = "http:" +  weather.current.condition.icon;
      this.time = weather.current.last_updated;
      console.log(weather);
    });
    console.log("test");
  }

  onClickMe() {
    // clicked = 1;
    alert("clicked");
    // this.location = London;
  }

}
