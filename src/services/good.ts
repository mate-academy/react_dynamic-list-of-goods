import { Good } from '../types/Good';
import { Filter } from '../types/filter';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getGoods(filter: Filter): Promise<Good[]> {
  return fetch(API_URL)
    .then(response => {
      return response.json();
    })
    .then((goods: Good[]) => {
      switch (filter) {
        case Filter.AllGoods:
          return goods;

        case Filter.First5Goods:
          return goods
            .sort((good1, good2) => good1.name.localeCompare(good2.name))
            .slice(0, 5);

        case Filter.RedGoods:
          return goods.filter(good => good.color === 'red');

        default:
          return [];
      }
    });
}
