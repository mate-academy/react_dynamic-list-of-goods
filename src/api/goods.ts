// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function getAll(): Promise<Good[]> {
  return fetch(`${API_URL}`)
    .then((response) => (response.ok
      ? response.json()
      : Promise.reject(new Error('Some error message'))));
}

export const get5First = async (): Promise<Good[]> => {
  return (await getAll()).slice(0, 6);
};

export const getRedGoods = async (): Promise<Good[]> => {
  return (await getAll()).filter(good => good.color === 'red');
};
