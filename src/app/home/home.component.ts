import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  value: string;
  weather: any;
  location = {
    state:'Manchester'
  };
  //
  constructor(private weatherService: WeatherService) {}
  //
  ngOnInit(): void {
    this.value = localStorage.getItem('location');
    if (this.value != null){
      this.location = JSON.parse(this.value);
    } else {
      this.location = {
       state:'Manchester'
      };
    }
    this.getWeatherService();
    console.log("test");
  }
  //
  //
  getWeatherService(){
    this.weatherService.getWeather(this.location.state).subscribe(
      response => {this.weather = response;
      console.log(response);},
      err => {console.error(err)},
      () => {console.log('done loading api')}
      // this.temperature = weather.current.temp_c;
      // this.humidity = weather.current.humidity;
      // this.feels = weather.current.feelslike_c;
      // this.wind = weather.current.wind_kph;
      // this.icon = "http:" +  weather.current.condition.icon;
      // this.time = weather.current.last_updated;

    );
  }

}
