export interface GoodParam {
  id: number;
  name: string;
  color: string;
}

export interface StateParam {
  goods: Array<GoodParam>;
  error: boolean;
}

export interface GoodList {
  goods: Array<GoodParam>;
}
