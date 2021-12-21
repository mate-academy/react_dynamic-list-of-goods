const API_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getAll: () => Promise<Good[]> = () => {
  return fetch(API_URL)
    .then(response => response.json());
};

export const get5First = (): Promise<Good[]> => {
  return fetch(API_URL)
    .then(response => response.json())
    .then(goods => goods.sort((firstGood: Good, secondGood: Good) => (
      firstGood.name.localeCompare(secondGood.name)
    )))
    .then(sortedByAlphabet => [...sortedByAlphabet].slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => (
      goods.filter(good => good.color === 'red')
    ));
};
