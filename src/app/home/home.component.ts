import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { RaceDialogComponent } from './race-dialog/race-dialog.component';
import { DriverDialogComponent } from './driver-dialog/driver-dialog.component';
import { ErgastService } from '../shared/services/ergast.service';
import { Race, Driver } from '../shared/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  isRaceLoading = false;
  racesList: Race[];
  winnerCode: string;
  yearList: Array<number>;

  constructor(private ergastService: ErgastService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.yearList = this.ergastService.generateYears();
  }

  getSeasonByYear(year: number) {
    this.isRaceLoading = true;
    this.ergastService.getSeasonDetails(year).subscribe((res) => {
      this.isRaceLoading = false;
      this.racesList = res.races;
      this.winnerCode = res.seasonWinnerCode;
    });
  }

  isRaceWinnerSeasonWinner(race: Race) {
    return race.winner.code === this.winnerCode;
  }

  openRaceDialog(race: Race) {
    this.dialog.open(RaceDialogComponent, {
      data: {
        race,
      },
      panelClass: 'race-details-modal',
    });
  }

  openDriverDialog(winner: Driver, driver: Driver[]) {
    this.dialog.open(DriverDialogComponent, {
      data: {
        winner,
        driver,
      }
    });
  }
}
