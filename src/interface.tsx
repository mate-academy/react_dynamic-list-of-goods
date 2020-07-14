export interface Elements {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface State {
  godsList: Elements[];
  isLoad: boolean;
}

export interface Gods {
  godsList: Elements[];
}
