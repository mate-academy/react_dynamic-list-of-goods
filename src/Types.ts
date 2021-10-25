export interface Good {
  id: number,
  name: string,
  color: string,
}

export type StateApp = {
  goods: Good[],
  onDisplay: boolean,
};

export type PropsForm = {
  goods: Good[],
  getGoods: (callback: Promise<Good[]>) => void,
};

export type StateForm = {
  selectColor: string,
  isColorSelect: boolean,
};
