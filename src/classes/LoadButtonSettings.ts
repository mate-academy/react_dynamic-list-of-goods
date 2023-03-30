import { Good } from '../types/Good';

export class LoadButtonSettings {
  namePart = '';

  dataCyPrefix = '';

  onClickCallback = () => {
    return new Promise<Good[]>(() => {});
  };

  constructor(
    namePart: string,
    dataCyPrefix: string,
    onClickCallback: () => Promise<Good[]>,
  ) {
    this.namePart = namePart;
    this.dataCyPrefix = dataCyPrefix;
    this.onClickCallback = onClickCallback;
  }
}
