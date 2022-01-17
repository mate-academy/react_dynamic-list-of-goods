// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function loader(delay: number) {
  return new Promise(resolve => setTimeout(resolve, delay));
}

export async function getAll(): Promise<Good[]> {
  await loader(1000);

  return fetch(API_URL)
    .then(response => response.json());
}

export const get5First = async () => {
  const serverAnswer = await getAll();

  return serverAnswer.sort((a, b) => a.name.localeCompare(b.name)).slice(0, 5);
};

export const getRed = async () => {
  const serverAnswer = await getAll();

  return serverAnswer.filter(el => el.color === 'red');
};
