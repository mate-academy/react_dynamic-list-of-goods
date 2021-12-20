// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function wait(delay: number) {
  return new Promise(res => setTimeout(res, delay));
}

export const getAll = async (): Promise<Good[]> => {
  await wait(2000);

  return fetch(API_URL)
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const get5First = () => {
  return getAll()
    .then(goods => goods.slice(0, 5));
};

export const getRedGoods = () => {
  return getAll()
    .then(goods => goods.filter(g => g.color === 'red'));
};
