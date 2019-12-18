import React from 'react';
import './App.css';
import GoodsList from './components/GoodsList';

const
  URL = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

function fetchData(url) {
  return fetch(url).then(resp => resp.json());
}

class App extends React.Component {
  state = {
    goods: [],
    goodsToShow: [],
    showButton: true,
  };

  componentDidMount() {
    this.getGoods();
  }

  getGoods = () => {
    fetchData(URL)
      .then(data => (
        this.setState({ goods: data })
      ));
  };

  showAll = () => {
    this.setState(prevState => ({
      goodsToShow: prevState.goods,
      showButton: false,
    }));
  };

  showFive = () => {
    this.setState(prevState => ({
      goodsToShow: [...prevState.goods]
        .sort((a, b) => (a.name > b.name ? 1 : -1)).slice(0, 5),
    }));
  };

  showRed = () => {
    this.setState(prevState => ({
      goodsToShow: prevState.goods
        .filter(item => item.color === 'red'),
    }));
  };

  render() {
    return (
      <span>
        <div className="App">
          <h1>Goods</h1>
          {this.state.showButton
          && (
            <button
              type="button"
              onClick={this.showAll}
            >
              Show goods
            </button>
          )}

          <button
            type="button"
            onClick={this.showFive}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={this.showRed}
          >
            Load red goods
          </button>
        </div>

        <GoodsList goods={this.state.goodsToShow} />
      </span>
    );
  }
}

export default App;
