import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class SunriseSunsetService {
  private url = 'https://api.sunrise-sunset.org/json';

  constructor(private http: HttpClient) { }

  getSunrise(lat: number, lng: number): Observable<HttpResponse<any>> {
    console.log(this.url + '?lat=' + lat + '&lng=' + lng + '&formatted=0');
      return this.http.get(this.url + '?lat=' + lat + '&lng=' + lng + '&formatted=0', {
        observe: 'response', responseType: 'json',
      });
  }
}

export interface ISunInfo {
  sunrise: string;
  sunset: string;
  solar_noon: string;
  day_length: string;
  civil_twilight_begin: string;
  civil_twilight_end: string;
  nautical_twilight_begin: string;
  nautical_twilight_end: string;
  astronomical_twilight_begin: string;
  astronomical_twilight_end: string;
}
