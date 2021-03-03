import { Injectable } from '@angular/core';
import { Observable, Subscription } from '@influxdata/influxdb-client';
import { BehaviorSubject, interval } from 'rxjs';
import { StrategieResult } from 'src/app/model/strategieResult';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StrategieService {

  infos = new Map<string, BehaviorSubject<StrategieResult[]>>();
  infosSubs = new Map<string, Subscription>();
  //stratInfos = new BehaviorSubject<StrategieResult[]>([]);
  sub: Subscription = null;

  constructor(
    private http: HttpService
  ) { }

  getStratInfos(id: string): Observable<StrategieResult[]> {
    if (!this.infosSubs.has(id)) {

      const source = interval(1000);

      this.infos.set(id, new BehaviorSubject<StrategieResult[]>([]));
      this.infosSubs.set(id, source.subscribe(lam => {
        this.http.getStratInfos().subscribe((x: string) => {
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
            stock_value: parseInt(objTmp[3])
          })
          this.infos.get(id).next(tmp);
        })
      })
    )
      return this.infos.get(id);
    }
  }


}
