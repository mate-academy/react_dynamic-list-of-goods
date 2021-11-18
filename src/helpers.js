const BASE_URL = 'https://jsonplaceholder.typicode.com';

export const request = (url, options) => {
  return fetch(`${BASE_URL}${url}`, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`${response.status} - ${response.statusText}`);
      }

      return response.json();
    });
};

export const post = (url, data) => {
  return request(url, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
};

export const patch = (url, data) => {
  return request(url, {
    method: 'PATH',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  });
};

export const remove = (url) => {
  return request(url, { method: 'Delete' });
};
