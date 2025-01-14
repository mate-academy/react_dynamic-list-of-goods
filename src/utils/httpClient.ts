const BASE_URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/';

export function getData<T>(url: string): Promise<T> {
  return fetch(BASE_URL + url).then(response => {
    if (!response.ok) {
      throw new Error(`${response.status}`);
    }

    return response.json();
  });
}
