import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  urlPt1 = 'http://api.openweathermap.org/data/2.5/weather?q=';
  forPt1 = "http://api.openweathermap.org/data/2.5/forecast?q=";
  urlCityPt2 = 'stockton,us';
  urlImperial = '&units=imperial';
  urlKeyPt3 = '&APPID=0e1ec07efa4a5a082c2cf3d4f8ff7764';
  API_URL = this.urlPt1 + this.urlCityPt2 + this.urlImperial + this.urlKeyPt3;
  FOR_URL = this.forPt1 + this.urlCityPt2 + this.urlImperial + this.urlKeyPt3;
  city: Object[];
  cityFore: Object[];
  constructor(private wService: WeatherService) { }

  ngOnInit() {
    this.wService.getURL(this.API_URL).subscribe( x => {
      this.city = x;
      console.log(this.city);
    });
    this.wService.getURL(this.FOR_URL).subscribe( x => {
      this.cityFore = x.list;
      console.log(this.cityFore);
    });
  }

}
