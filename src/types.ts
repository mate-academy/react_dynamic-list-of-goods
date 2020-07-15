export type Good = {
  id: number;
  name: string;
  color: string;
  createdAt: string;
  updatedAt: string;
};

interface ResponseData<D> {
  data: D;
}

export type GoodsData = ResponseData<Good[]>;
