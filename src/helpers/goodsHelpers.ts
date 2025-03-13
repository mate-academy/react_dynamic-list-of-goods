import { Good } from '../types/Good';
import { get5First, getAll, getRedGoods } from '../api/goods';

export const loadAllGoods = (setGoods: (goods: Good[]) => void) => {
  getAll().then(setGoods);
};

export const loadFirstFiveGoods = (setGoods: (goods: Good[]) => void) => {
  get5First().then(setGoods);
};

export const loadRedGoods = (setGoods: (goods: Good[]) => void) => {
  getRedGoods().then(setGoods);
};
