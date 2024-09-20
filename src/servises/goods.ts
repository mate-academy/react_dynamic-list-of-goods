import { Good } from "../types/Good";

export function getGoodsFromServer(func: string): Promise<Good[]> {
  return fetch('http://localhost:5173/public/goods.json')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch goods');
      }

      return response.json();
    })
  
    .then(goods => {
      switch (func) {
        case 'getAll':
          return goods;
        
        case 'get5First':
          return goods.sort((a: Good, b: Good) => a.name.localeCompare(b.name)).slice(0, 5);
        
        case 'getRed':
          return goods.filter((good: Good) => good.color === 'red')
      }
    })  
}
