export const API_URL:string = 'https://mate-academy.github.io/react_dynamic-list-of-goods';

export const getGoods = async () => {
  const response = await fetch(`${API_URL}/goods.json`);

  return response.json();
}
