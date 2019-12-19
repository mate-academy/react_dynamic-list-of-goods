const GetListOfGoods = () => {
  const urlOfGoods = fetch(
    'https://mate-academy.github.io/'
    + 'react_dynamic-list-of-goods/goods.json'
  );

  return urlOfGoods.then(response => response.json());
};

export default GetListOfGoods;
