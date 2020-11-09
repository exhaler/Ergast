import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { forkJoin, Observable } from 'rxjs';

import { map } from 'rxjs/operators';

import { Driver, Season } from '../models';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ErgastService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  generateYears() {
    const max = 2015;
    const min = max - 10;
    const years = [];

    for (let i = min; i <= max; i++) {
      years.push(i);
    }
    return years;
  }

  getSeasonDetails(year: number = 2005): Observable<Season> {
    // Get list of the races for a season
    const raceResults = this.http
      .get(`${this.apiUrl}/${year}/results.json?limit=1000`)
      .pipe(
        map((r: any) => {
          return r.MRData.RaceTable.Races.map((race) => {
            return this.createRaceObject(race);
          });
        })
      );

    // Get world champion of the season for that year
    const standingsResults = this.http
      .get(`${this.apiUrl}/${year}/driverStandings.json`)
      .pipe(
        map(
          (r: any) =>
            r.MRData.StandingsTable.StandingsLists[0].DriverStandings[0].Driver
              .code
        )
      );

    return forkJoin({ races: raceResults, seasonWinnerCode: standingsResults });
  }

  private createRaceObject(race) {
    return {
      round: race.round,
      circuitName: race.Circuit.circuitName,
      circuitUrl: race.Circuit.url,
      drivers: race.Results.map((driver) => {
        return this.createDriverObject(driver);
      }),
      winner: race.Results[0].Driver,
      raceName: race.raceName,
      raceUrl: race.url,
    };
  }

  private createDriverObject(driver) {
    let tmpLap = '';
    let tmpSpeed = '';
    let tmpTime = '';

    if (driver.FastestLap) {
      tmpLap = driver.FastestLap.lap;
    }

    if (driver.FastestLap) {
      tmpSpeed =
        driver.FastestLap.AverageSpeed.speed +
        ' ' +
        driver.FastestLap.AverageSpeed.units;
    }

    if (driver.Time) {
      tmpTime = driver.Time.time;
    }

    return {
      position: driver.position,
      car: driver.Constructor.name,
      driver: driver.Driver.givenName + ' ' + driver.Driver.familyName,
      time: tmpTime,
      laps: driver.laps,
      averageSpeed: tmpSpeed,
      fastestLap: tmpLap,
    };
  }
}
