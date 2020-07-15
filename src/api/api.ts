export const getGoods = async <T>(): Promise<T[]> => {
  const response = await fetch('https://mate.academy/students-api/goods')
    .then(responsed => responsed.json());

  return response.data;
};
