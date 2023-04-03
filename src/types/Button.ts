import { Good } from './Good';

export interface Button {
  text: string;
  loadFunction: () => Promise<Good[]>;
  dataCy: string;
}
