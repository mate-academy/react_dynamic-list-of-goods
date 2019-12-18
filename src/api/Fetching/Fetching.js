function fetchData(url) {
  return fetch(url)
    .then(response => response.json());
}

export { fetchData };
