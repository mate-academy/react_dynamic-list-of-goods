import { Good } from '../components/Good';

export function getGoods(): Promise<Good[]> {
  return fetch('https://mate.academy/students-api/goods')
    .then(response => response.json())
    .then(fetchedData => fetchedData.data);
}
