export interface Good {
  id: number,
  name: string,
  color: string,
}

export type State = {
  goods: Good[],
  onDisplay: boolean,
  selectedColor: string,
};
