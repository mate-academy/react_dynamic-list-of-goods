export interface GoodListItem {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface AppState {
  goods: Array<GoodListItem>;
}
