const API_URL = 'https://mate.academy/students-api/goods';

export async function getAllGoods(): Promise<Good[]> {
  const response = await fetch(API_URL);

  return response.json();
}

export const getFiveFirst = async () => {
  const goods = await getAllGoods();

  return [...goods]
    .sort((first: Good, second: Good) => (
      first.name.localeCompare(second.name)
    ))
    .slice(0, 5);
};

export const getRedGoods = async () => {
  const goods = await fetch(`${API_URL}?color=red`);

  return goods.json();
};
