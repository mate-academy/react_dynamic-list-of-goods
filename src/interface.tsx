export interface Good {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface Goods {
  goods: Good[];
}
