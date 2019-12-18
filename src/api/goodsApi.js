export const GoodsFetching = url => fetch(url)
  .then(response => response.json());
// .then(data => data.text());
