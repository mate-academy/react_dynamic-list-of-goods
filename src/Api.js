export default class Api {
  constructor(url) {
    this.url = url;
  }

  getData() {
    return fetch(this.url).then(response => response.json());
  }
}
