import { Good } from './Good';

export type LoadFunction = () => Promise<Good[]>;
