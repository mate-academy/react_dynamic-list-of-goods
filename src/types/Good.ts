export interface Good {
  id: number;
  name: string;
  color: string;
}

export type ApiCall = () => Promise<Good[]>;
