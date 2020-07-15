export interface Good {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  goods: Good[];
  isLoaded: boolean;
}

export interface Goods {
  goods: Good[];
}
