import { Injectable } from '@angular/core';
import { Observable, Subscription } from '@influxdata/influxdb-client';
import { BehaviorSubject, interval } from 'rxjs';
import { StrategieResult } from 'src/app/model/strategieResult';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StrategieService {

  description = new Map<string, string>();
  infos = new Map<string, BehaviorSubject<StrategieResult[]>>();
  infosSubs = new Map<string, Subscription>();
  //stratInfos = new BehaviorSubject<StrategieResult[]>([]);
  sub: Subscription = null;

  constructor(
    private http: HttpService
  ) {
    this.description.set("sma-rsi","blabla");
    this.description.set("rsi", "blabla mais RSI");
  }

  getStratDesc(id: string) : string {
    return this.description.get(id);
  }

  getStratInfos(id: string): Observable<StrategieResult[]> {
    if (!this.infosSubs.has(id)) {

      const source = interval(1000);

      this.infos.set(id, new BehaviorSubject<StrategieResult[]>([
        {money: 1000, placed_order: 0, preferred_ticker: "APPL", stock_value: 0, goal: 0, date: new Date()}
      ]));
      this.infosSubs.set(id, source.subscribe(lam => {
        this.http.getStratInfos(id).subscribe((x: string) => {
          if (!this.infos.has(id)) {
            this.infos.set(id, new BehaviorSubject<StrategieResult[]>([]));
          }
          let tmp = this.infos.get(id).value;
          let objTmp = x.split(' ');
          tmp = [...tmp];
          tmp.push({
            money: parseInt(objTmp[0]),
            placed_order: parseInt(objTmp[1]),
            preferred_ticker: objTmp[2],
            stock_value: parseInt(objTmp[3]),
            goal: parseInt(objTmp[4]),
            date: new Date()
          })
          console.log(tmp);
          this.infos.get(id).next(tmp);
        })
      })
    )
      return this.infos.get(id);
    }
  }


}
