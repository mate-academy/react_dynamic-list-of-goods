import { Good } from '../types/Good';

export function getGoods(query: string): Promise<Good[]> {
  return fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  )
    .then(responce => {
      if (!responce.ok) {
        throw new Error('ty lox');
      }

      return responce.json() as Promise<Good[]>;
    })
    .then(goods => {
      switch (query) {
        case 'first-five':
          return goods
            .sort((good1, good2) =>
              good1.name.toLowerCase().localeCompare(good2.name.toLowerCase()),
            )
            .slice(0, 5);
        case 'red':
          return goods.filter(good => good.color === 'red');
        case 'base':
          return goods;
        default:
          return goods;
      }
    });
}
