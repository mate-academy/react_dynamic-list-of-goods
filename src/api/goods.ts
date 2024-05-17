import { Good, RGBCOLOR } from '../types/Good';

// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

export function getAll(): Promise<Good[]> {
  return fetch(API_URL).then(response => response.json());
}

const getAlltoRGB = () => {
  return getAll().then(goods =>
    goods.map(good => {
      switch (good.color) {
        case RGBCOLOR.RED:
          return {
            ...good,
            color: 'rgb(255, 0, 0)',
          };
        case RGBCOLOR.BLUE:
          return {
            ...good,
            color: 'rgb(0, 0, 255)',
          };
        default:
          return {
            ...good,
            color: 'rgb(0, 255, 0)',
          };
      }
    }),
  );
};

export const get5First = () => {
  return getAlltoRGB().then(goods =>
    goods
      .sort((good, good2) => good.name[0].localeCompare(good2.name[0]))
      .slice(0, 5),
  );
};

export const getRedGoods = () => {
  return getAlltoRGB().then(goods =>
    goods.filter(good => good.color === 'rgb(255, 0, 0)'),
  );
};
