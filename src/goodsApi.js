const URL = 'https://mate-academy.github.io/'
  + 'react_dynamic-list-of-goods/goods.json';

const getGoods = () => {
  const dataPromise = fetch(URL)
    .then(response => response.json());

  return dataPromise;
};

export default getGoods;
