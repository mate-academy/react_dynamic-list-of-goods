import { Product } from '../interface';

const url = 'https://mate.academy/students-api/goods';

export const response = (): Promise<Product[]> => fetch(url)
  .then(
    respond => respond.json(),
  ).then(
    result => result.data,
  );
