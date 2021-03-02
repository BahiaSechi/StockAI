import { Injectable } from '@angular/core';
import { Subscription } from '@influxdata/influxdb-client';
import { BehaviorSubject } from 'rxjs';
import { StrategieResult } from 'src/app/model/strategieResult';
import { HttpService } from '../http/http.service';

@Injectable({
  providedIn: 'root'
})
export class StrategieService {

  stratInfos = new BehaviorSubject<StrategieResult[]>([]);
  sub: Subscription = null;

  constructor(
    private http: HttpService
  ) { }

  getStratInfos(id: string) {
    if (this.sub == null) {
      this.sub = this.http.getStratInfos().subscribe(x => {
        let tmp = this.stratInfos.value;
        let objTmp = x.split(' ');
        tmp = [...tmp];
        tmp.push({money: parseInt(objTmp[0]), placed_order: parseInt(objTmp[1]), preferred_ticker: objTmp[2], stock_value: parseInt(objTmp[3])})
        console.log("here they are fuckers : ", tmp);
        this.stratInfos.next(tmp);
      });
    }
    
    return this.stratInfos;
  }


}
