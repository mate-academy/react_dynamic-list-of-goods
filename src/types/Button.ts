import { Good } from './Good';

export type Button = {
  id: string,
  action: () => Promise<Good[]>,
  title: string,
};
