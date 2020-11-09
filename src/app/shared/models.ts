export class Driver {
  code: string;
  familyName: string;
  givenName: string;
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
