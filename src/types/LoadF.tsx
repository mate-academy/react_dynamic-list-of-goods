import { Good } from './Good';

export type LoadFn = () => Promise<Good[]>;
