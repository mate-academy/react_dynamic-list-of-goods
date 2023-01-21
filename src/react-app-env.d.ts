type Color = 'red' | 'green' | 'blue';

type GoodsPromise = () => Promise<GoodsItem[]>;

interface GoodsItem {
  id: number;
  name: string;
  color: Color;
}
