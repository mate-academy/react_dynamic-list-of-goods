export const getGoods = async <T>(): Promise<T[]> => {
  const response = await fetch('https://mate.academy/students-api/goods').then(respond => respond.json());

  return response.data;
};
