import { LoadFn } from './LoadFn';

export interface ButtonType {
  text: string;
  loadFunction: LoadFn;
  dataCy: string;
}
