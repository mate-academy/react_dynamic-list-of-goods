export interface Elements {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  goods: Elements[];
  isLoaded: boolean;
}

export interface Gods {
  goods: Elements[];
}
