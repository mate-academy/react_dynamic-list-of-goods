const API_URL = `https://mate-academy.github.io/react_dynamic-list-of-goods`;

export const request = url => fetch(`${API_URL}${url}`)
  .then(response => response.json());
