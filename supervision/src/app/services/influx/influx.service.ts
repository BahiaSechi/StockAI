import { Injectable } from '@angular/core';
import {InfluxDB, FluxTableMetaData, ClientOptions} from '@influxdata/influxdb-client';

@Injectable({
  providedIn: 'root'
})
export class InfluxService {

  constructor() { }

  // queryAPI() {
  //   const username = 'supervision'
  //   const password = 'Sup3rv1si0n'
  //
  //   const database = 'stockai'
  //   const retentionPolicy = 'autogen'
  //
  //   const bucket = `${database}/${retentionPolicy}`
  //
  //   const clientOptions: ClientOptions = {
  //     url: 'http://51.210.180.105:8086',
  //     token: `${username}:${password}`,
  //   }
  //
  //   const influxDB = new InfluxDB(clientOptions)
  //   console.log('*** QUERY ROWS ***')
  //
  //   const queryAPI = influxDB.getQueryApi('')
  //   const query = `from(bucket: "${bucket}") |> range(start: -1h)`
  //
  //   console.log("queryAPI", queryAPI, "query", query)
  //
  //   queryAPI.queryRows(query, {
  //     next(row, tableMeta) {
  //       console.log("HERE");
  //       const o = tableMeta.toObject(row)
  //       console.log(`${o.close} ${o.high} : ${o.low}=${o.open} et ${o.volume}`)
  //     },
  //     error(error) {
  //       console.error(error)
  //     },
  //     complete() {
  //       console.log('\nFinished')
  //     },
  //   });
  // }

}
