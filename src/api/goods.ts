// eslint-disable-next-line
const API_URL = `https://mate.academy/students-api/goods`;

export const getAllGoods = async (): Promise<Good[]> => {
  const response = await fetch(API_URL);

  return response.json();
};

export const get5First = async () => {
  const goods = await getAllGoods();

  return goods
    .sort((good1, good2) => good1.name.localeCompare(good2.name))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const color = 'red';
  const url = `${API_URL}?color=${color}`;

  const response = await fetch(url);

  return response.json();
};

export const addNewGood = async (data: NewGood) => {
  const goods = await fetch(API_URL, {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const result = await goods.json();

  // eslint-disable-next-line no-console
  console.log(result);
};
