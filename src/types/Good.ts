export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum Criterion {
  all = 'ALL',
  firstFive = 'FIVE',
  onlyRed = 'ONLY RED',
}
