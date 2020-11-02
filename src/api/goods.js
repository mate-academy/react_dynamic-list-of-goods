// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;
const FAKE_API = `https://my-fake-api.com`;

export function testFakeApi() {
  return fetch(FAKE_API).then((response) => {
    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return response.json();
  });
}

export function getAll() {
  return fetch(API_URL)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
}

export const get5First = async() => {
  const allGoods = await getAll();

  return allGoods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async() => {
  const allGoods = await getAll();

  return allGoods.filter(good => good.color === 'red');
};
