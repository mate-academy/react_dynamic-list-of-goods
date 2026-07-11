import { Good } from './Good';
export type GoodsLoader = () => Promise<Good[]>;
