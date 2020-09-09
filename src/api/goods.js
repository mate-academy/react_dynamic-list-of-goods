// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// this is my personal compendium for future
/*
export function getGoodsFromServer() {
  return fetch(API_URL)
    .then(response => response.json());
}
*/

export const getGoods = async() => (await fetch(API_URL)).json();
