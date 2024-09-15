import { get5First, getAll, getRedGoods } from '../api/goods';
import { Good, GoodsTypes } from '../types/Good';

let data: Good[];

export async function getGoods(goodsType: string | null): Promise<Good[]> {
  switch (goodsType) {
    case GoodsTypes.AllGoods:
      data = await getAll();
      break;
    case GoodsTypes.FirstFiveGoods:
      data = await get5First();
      break;
    case GoodsTypes.RedGoods:
      data = await getRedGoods();
      break;

    default:
      data = [];
      break;
  }

  return data;
}
