const GOODS_URL = '/goods';

async function fetchAllGoods() {
  const res = await fetch(GOODS_URL);

  if (!res.ok) {
    throw new Error(`Failed to load goods: ${res.status} ${res.statusText}`);
  }

  return res.json();
}

export async function loadAllGoods() {
  return fetchAllGoods();
}

export async function loadFirst5Goods() {
  const goods = await fetchAllGoods();

  return [...goods]
    .sort((a, b) => String(a.name).localeCompare(String(b.name)))
    .slice(0, 5);
}

export async function loadRedGoods() {
  const goods = await fetchAllGoods();

  return goods.filter(g => String(g.color).toLowerCase() === 'red');
}
