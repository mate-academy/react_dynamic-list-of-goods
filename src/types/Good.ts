export interface Good {
  id: number;
  name: string;
  color: string;
}

export const getAll = async (): Promise<Good[]> => {
  const response = await fetch(
    `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`,
  );

  if (!response.ok) {
    throw new Error('Failed to fetch goods: ' + response.statusText);
  }

  return response.json();
};
