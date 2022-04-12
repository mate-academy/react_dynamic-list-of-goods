const API_URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export async function getAll(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const get5First = async () => {
  const firstFiveItems = await getAll().then(data => data);

  return firstFiveItems.slice(0, 5);
};

export const getRed = async () => {
  const redItems = await getAll().then(data => data);

  return redItems.filter(item => item.color === 'red');
};
