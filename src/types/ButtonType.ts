import { LoadFn } from './LoadF';

export interface ButtonType {
  text: string;
  loadFunction: LoadFn;
  dataCy: string;
}
