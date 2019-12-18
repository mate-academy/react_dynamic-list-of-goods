
const fetchGoods = url => (
  fetch(url).then(response => response.json())
);

export default fetchGoods;
