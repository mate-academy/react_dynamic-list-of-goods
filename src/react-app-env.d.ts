// eslint-disable-next-line
/// <reference types="react-scripts" />

interface Good {
  id: number;
  name: string;
  color: string;
}

interface Prop {
  list: Good[];
}

interface State {
  listOfGoods: Good[];
  minLength: string;
}
