import { Component, OnInit, DoCheck } from '@angular/core';
import { SunriseSunsetService, ISunInfo } from '../services/sunrise-sunset.service';
import { HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router, NavigationEnd } from '@angular/router';

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
  _date2 = new Date(Date.now());
  todayPlus24 = new Date(Date.now());
  currentDate = new Date(Date.now());

  constructor(private service: SunriseSunsetService) {  }

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
    let i = 1;
    const UTCDate = new Date(sunriseTime);
    console.log(UTCDate);
    tempTatwa.startTime = new Date(UTCDate);
    tempTatwa.tatwaName = 'Akash';
    this.tatwas.push(tempTatwa);
    if (UTCDate.getDate() > this._date.getDate()) {
      UTCDate.setDate(UTCDate.getDate() - 1);
    }
    while (UTCDate.getDate() < (this._date.getDate() + 1)) {
      tempTatwa = new Tatwa();
      UTCDate.setMinutes(UTCDate.getMinutes() + date1.getMinutes());
      tempTatwa.startTime = new Date(UTCDate);
      tempTatwa.tatwaName = this.setTatwaName(i);
      tempTatwa.tatwaStatus = this.setActiveTatwa(UTCDate);
      console.log(tempTatwa);
      this.tatwas.push(tempTatwa);
      if (i !== 4) {
        i++;
      } else {
        i = 0;
      }
    }
  }

  setActiveTatwa(currentTime: Date): boolean {
    this.todayPlus24 = new Date(currentTime);
    this.todayPlus24.setMinutes(this.todayPlus24.getMinutes() + 24);
    if ( this._date2.getTime() > currentTime.getTime() && this._date2.getTime() < this.todayPlus24.getTime()) {
      console.log(this._date2);
      console.log(currentTime);
      console.log(this.todayPlus24);
      return true;
    } else {
      return false;
    }
  }

  setTatwaName(option: number): string {
    switch (option) {
      case 0:
        return 'Akash';
      case 1:
        return 'Vayú';
      case 2:
        return 'Tejas';
      case 3:
        return 'Prithvi';
      case 4:
        return 'Apas';
    }
  }
}
export class Tatwa {
  private _startTime: Date;
  private _tatwaName: string;
  private _status: boolean;

    get startTime(): Date {
      return this._startTime;
    }

    set startTime(newTime: Date) {
      this._startTime = newTime;
    }

    get tatwaName(): string {
      return this._tatwaName;
    }

    set tatwaName(newName: string) {
      this._tatwaName = newName;
    }

    get tatwaStatus(): boolean {
      return this._status;
    }

    set tatwaStatus(newStatus: boolean) {
      this._status = newStatus;
    }
}
