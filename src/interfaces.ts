export interface GoodProps {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
}

export interface GoodsProps {
  goods: GoodProps[];
}
