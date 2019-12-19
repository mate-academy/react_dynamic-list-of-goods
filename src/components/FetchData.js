function fetchData(url) {
  return fetch(url).then(resp => resp.json());
}

export default fetchData;
