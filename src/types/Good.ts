export interface Good {
  id: number;
  name: string;
  color: GoodColor;
}

export enum GoodColor {
  Red = 'red',
  Green = 'green',
  Blue = 'blue',

}
