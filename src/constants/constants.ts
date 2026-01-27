import { get5First, getAll, getRedGoods } from '../api/goods';
import { Good } from '../types/Good';

type ButtonAttr = [string, string, () => Promise<Good[]>];

export const buttonsAttr: ButtonAttr[] = [
  ['Load all goods', 'all-button', getAll],
  ['Load 5 first goods', 'first-five-button', get5First],
  ['Load red goods', 'red-button', getRedGoods],
];
