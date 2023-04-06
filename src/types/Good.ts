export interface Good {
  id: number;
  name: string;
  color: string;
}

export enum LoadError {
  LoadingError = 'An error occured when loading goods!',
  ContentTypeError = 'Content-type is not supported',
}

export enum GoodsType {
  Default,
  All,
  FirstFive,
  OnlyRed,
}
