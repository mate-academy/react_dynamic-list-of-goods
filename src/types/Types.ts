export interface Good {
  id: number;
  name: string;
  color: string;
}

export type CallbackType = () => Promise<Good[]>;
