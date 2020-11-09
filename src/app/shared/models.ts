export class Driver {
  code: string;
  familyName: string;
  givenName: string;
  dateOfBirth: string;
  nationality: string;
  url: string;
  laps: string;
  time: string;
  car: string;
  fastestLap: string;
  averageSpeed: string;
  driver?: Driver;
  winner?: Driver;
}

export class Race {
  round: number;
  circuitName: string;
  circuitUrl: string;
  raceName: string;
  raceUrl: string;
  winner: Driver;
  drivers: Driver[];
  race?: Race;
}

export class Season {
  races: Race[];
  seasonWinnerCode: string;
}
