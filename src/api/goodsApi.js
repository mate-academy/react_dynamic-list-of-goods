export const GoodsFetching = url => fetch(url)
  .then(response => response.json());
