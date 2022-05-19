// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export async function fetchGoods(
  getSomeGoods:(goods: Good[]) => void,
) {
  const response = await fetch(API_URL);

  const goods = await response.json();

  getSomeGoods(goods);
}
