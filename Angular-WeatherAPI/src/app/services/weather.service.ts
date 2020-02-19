import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  posLat: number;
  $posLat = new BehaviorSubject<number>(this.posLat);

  posLon: number;
  $posLon = new BehaviorSubject<number>(this.posLon);

  constructor(private http: HttpClient) { }
  getURL(url: string): Observable<any> {
    return this.http.get(url);
  }
  getPosition() {
    navigator.geolocation.getCurrentPosition((position) => {
        this.posLat = position.coords.latitude;
        this.posLon = position.coords.longitude;
    });
    this.$posLat.next(this.posLat);
    this.$posLon.next(this.posLon);
  }
}
