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
  printGoods: (event: React.MouseEvent<HTMLButtonElement>) => void,
  selectedColor: (color: string) => void,
};

export type StateForm = {
  selectColor: string,
  isColorSelect: boolean,
};
