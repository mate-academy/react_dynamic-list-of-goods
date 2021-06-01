// eslint-disable-next-line
const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json`;

function getResponse() {
  return fetch(API_URL)
    .then(response => response.json());
}

export default getResponse;
