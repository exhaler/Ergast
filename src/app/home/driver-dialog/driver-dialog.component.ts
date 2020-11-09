import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Driver } from '../../shared/models';

@Component({
  selector: 'app-driver-dialog',
  templateUrl: './driver-dialog.component.html',
  styleUrls: ['./driver-dialog.component.scss'],
})
export class DriverDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public winner: Driver,
    @Inject(MAT_DIALOG_DATA) public driver: Driver
  ) {
    this.winner = this.winner.winner;
    this.driver = this.driver.driver;
    console.log(this.driver);
  }
}
