const API_URL
  = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

let goodsFromServer;

fetch(API_URL)
  .then(response => response.json())
  .then((goods) => {
    goodsFromServer = goods;
  });

export const getAll = () => goodsFromServer;

export const get5First = () => goodsFromServer
  .slice(0, 5);

export const getRedGoods = () => goodsFromServer
  .filter(good => good.color === 'red');
