import { Good } from '../types/Good';
import { getAll } from '../utils/httpClients';

export function getFirstFive(): Promise<Good[]> {
  return getAll().then(goods =>
    goods.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5),
  );
}
