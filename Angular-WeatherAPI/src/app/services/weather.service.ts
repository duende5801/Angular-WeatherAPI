import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  posLat: number;
  posLon: number;

  constructor(private http: HttpClient) { }
  getURL(url: string): Observable<any> {
    return this.http.get(url);
  }
  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.posLat = position.coords.latitude;
        this.posLon = position.coords.longitude;
    });
  }
}
