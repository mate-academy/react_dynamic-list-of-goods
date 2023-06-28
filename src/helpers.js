const sortByName = (a, b) => {
  if (a.name < b.name) {
    return -1;
  }

  if (a.name > b.name) {
    return 1;
  }

  return 0;
};

export const firstSortedFive = (goods) => {
  const goodsFromServer = goods.sort(sortByName);

  goodsFromServer.length = 5;

  return goodsFromServer;
};

export const filteredByColor = goods => goods
  .filter(good => good.color === 'red');
