import { Goods } from './GoodList';

export interface State {
  goods: Array<Goods>;
  isLoading: boolean;
}
