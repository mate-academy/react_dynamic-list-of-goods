import { Good } from '../types/Good';

const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

// delay artificial para Loader
const wait = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

// Retorna a lista completa de produtos
export async function getAllGoods(): Promise<Good[]> {
  const res = await fetch(API_URL);
  if (!res.ok) {
    throw new Error(`HTTP error! status: ${res.status}`);
  }
  const data = await res.json();
  await wait(500); // delay artificial
  if (!Array.isArray(data)) {
    throw new Error('Invalid data format');
  }
  return data;
}

// Retorna os 5 primeiros produtos ordenados por nome
export async function getFirstFiveSortedByName(): Promise<Good[]> {
  const goods = await getAllGoods();
  return [...goods]
    .sort((a, b) =>
      (a.name ?? '').toString().localeCompare((b.name ?? '').toString())
    )
    .slice(0, 5);
}

// Retorna apenas os produtos vermelhos
export async function getRedGoods(): Promise<Good[]> {
  const goods = await getAllGoods();
  return goods.filter(
    g => (g.color ?? '').toString().toLowerCase() === 'red'
  );
}
