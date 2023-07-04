export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum QueryType {
  ALL,
  SOME,
  COLOR,
}
