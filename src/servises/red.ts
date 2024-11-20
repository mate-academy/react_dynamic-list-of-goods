import { Good } from '../types/Good';
import { getAll } from '../utils/httpClients';

export function getRed(): Promise<Good[]> {
  return getAll().then(goods => goods.filter(good => good.color === 'red'));
}
