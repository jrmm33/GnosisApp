import { Component, OnInit, DoCheck } from '@angular/core';
import { SunriseSunsetService, ISunInfo } from '../services/sunrise-sunset.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-tatwas',
  templateUrl: './tatwas.component.html',
  styleUrls: ['./tatwas.component.css']
})
export class TatwasComponent implements OnInit {

  private lat: number;
  private lng: number;
  public tatwas: Array<Tatwa> = [];
  _date = new Date(Date.now());
  currentDate = new Date(Date.now());

  constructor(private service: SunriseSunsetService) { }

  ngOnInit() {
    this.findMe();
  }

  findMe() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.service.getSunrise(this.lat, this.lng)
        .subscribe(
          result => {
            this.setTatwas(result['body'].results.sunrise);
          },
          err => {
            console.log(err);
          }
        );
      });
    } else {
      alert('No se pudo detectar donde estas!, carga la página nuevamente');
    }
  }

  setTatwas(sunriseTime: string) {
    let tempTatwa = new Tatwa();
    const date1 = new Date('2019-01-25T00:24:00+00:00');
    const date2 = new Date('2019-01-25T00:59:00+00:00');
    const date3 = new Date('2019-01-25T00:02:00+00:00');

    const UTCDate = new Date(sunriseTime);
    console.log(UTCDate);
    tempTatwa.startTime = new Date(UTCDate);
    tempTatwa.tatwaName = 'Akash';
    console.log(tempTatwa.tatwaName);
    this.tatwas.push(tempTatwa);

    for (let j = 0; j < 5; j++) {
      for (let i = 0; i < 4; i++) {
        tempTatwa = new Tatwa();
        UTCDate.setMinutes(UTCDate.getMinutes() + date1.getMinutes());
        console.log(UTCDate);
        tempTatwa.startTime = new Date(UTCDate);
        switch (i) {
          case 0:
            tempTatwa.tatwaName = 'Vayú';
            break;
          case 1:
            tempTatwa.tatwaName = 'Tejas';
            break;
          case 2:
            tempTatwa.tatwaName = 'Prithvi';
            break;
          case 3:
            tempTatwa.tatwaName = 'Apas';
            break;
        }
        console.log(tempTatwa.tatwaName);
        this.tatwas.push(tempTatwa);
      }
      tempTatwa = new Tatwa();
      UTCDate.setMinutes(UTCDate.getMinutes() + date2.getMinutes() + date2.getMinutes() + date3.getMinutes());
      console.log(UTCDate);
      tempTatwa.startTime = new Date(UTCDate);
      tempTatwa.tatwaName = 'Akash';
      console.log(tempTatwa.tatwaName);
      this.tatwas.push(tempTatwa);

    }
  }
}
export class Tatwa {
  private _startTime: Date;
  private _tatwaName: string;

    get startTime(): Date {
      return this._startTime;
    }

    set startTime(newName: Date) {
      this._startTime = newName;
    }

    get tatwaName(): string {
      return this._tatwaName;
    }

    set tatwaName(newName: string) {
      this._tatwaName = newName;
    }
}
