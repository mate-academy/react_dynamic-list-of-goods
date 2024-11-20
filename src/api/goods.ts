

// eslint-disable-next-line


export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

export const get5First = () => {
  return getAll().then(goods => goods); // sort and get the first 5
};

export const getRedGoods = () => {
  return getAll().then(goods => goods); // get only red
};
