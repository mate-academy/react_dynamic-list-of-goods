export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum GoodLoadType {
  All = 'all',
  First5 = 'first5',
  Red = 'red',
  None = '',
}
