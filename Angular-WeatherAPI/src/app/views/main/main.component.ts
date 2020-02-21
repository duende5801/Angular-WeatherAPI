import { Component, OnInit } from '@angular/core';
import { WeatherService } from 'src/app/services/weather.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  posLat: any;
  posLong: any;
  urlPt1 = 'http://api.openweathermap.org/data/2.5/weather?';
  forPt1 = 'http://api.openweathermap.org/data/2.5/forecast?';
  urlPosPt2 = 'lat=' + this.posLat + '&lon=' + this.posLong;
  urlCityPt2 = 'q=allenheads';
  urlImperial = '&units=imperial';
  urlKeyPt3 = '&APPID=0e1ec07efa4a5a082c2cf3d4f8ff7764';
  API_URL = this.urlPt1 + this.urlCityPt2 + this.urlImperial + this.urlKeyPt3;
  FOR_URL = this.forPt1 + this.urlCityPt2 + this.urlImperial + this.urlKeyPt3;
  city: Object[];
  cityFore: Object[];
  today: number = Date.now();
  constructor(private wService: WeatherService) { }

  ngOnInit() {
    this.wService.$posLat.subscribe( pos => {
      this.posLat = pos;
      console.log(this.posLat);
    });
    this.wService.$posLon.subscribe( pos => {
      this.posLong = pos;
      console.log(this.posLong);
    });
    this.wService.getURL(this.API_URL).subscribe( x => {
      this.city = x;
      console.log(this.city);
    });
    this.wService.getURL(this.FOR_URL).subscribe( x => {
      this.cityFore = x.list.filter((value, index) => index % 8 === 0);
      console.log(this.cityFore);
    });
  }
  toggle() {
    this.show = !this.show;
  }
}
