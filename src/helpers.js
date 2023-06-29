const sortByName = (a, b) => {
  return a.name.localeCompare(b.name);
};

export const firstSortedFive = (goods) => {
  const goodsFromServer = goods.sort(sortByName);

  return goodsFromServer.slice(0, 5);
};

export const filteredByColor = goods => goods
  .filter(good => good.color === 'red');
