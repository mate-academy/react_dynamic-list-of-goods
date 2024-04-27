export interface Good {
  id: number;
  name: string;
  color: string;
}

export const getAllGoods = (): Promise<Good[]> => {
  return fetch(
    `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`,
  ).then(response => response.json());
};

export const get5Goods = (): Promise<Good[]> => {
  return fetch(
    `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`,
  )
    .then(response => response.json())
    .then(goods =>
      goods
        .sort((a: Good, b: Good) => a.name.localeCompare(b.name))
        .slice(0, 5),
    );
};

export const getRedGoods = (): Promise<Good[]> => {
  return fetch(
    `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`,
  )
    .then(response => response.json())
    .then(goods => goods.filter((good: Good) => good.color === 'red'));
};
