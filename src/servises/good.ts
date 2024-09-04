export function getGoods() {
  return fetch(
    'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json',
  ).then(response => {
    if (!response.ok) {
    }

    return response.json();
  });
}
