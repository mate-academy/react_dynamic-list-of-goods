import { Good } from './Good';

export type Button = {
  label: string,
  dataCy: string,
  getGoods: () => Promise<Good[]>,
  style: string,
};
