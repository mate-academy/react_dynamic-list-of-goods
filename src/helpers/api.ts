const URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

export const getGoods = () => fetch(URL).then(response => response.json());
