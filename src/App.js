import React from 'react';
import GoodsList from './GoodsList';

const URL
  = 'https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json';

const getGoods = () => fetch(URL)
  .then(response => response.json());

class App extends React.Component {
  state = {
    goods: [],
    showButtonLoadAllGoods: true,
    showButtonLoadFiveGoods: true,
    showButtonLoadRedGoods: true,
  };

  LoadAllGoods = () => {
    getGoods().then(goods => this.setState({
      goods,
      showButtonLoadAllGoods: false,
      showButtonLoadFiveGoods: true,
      showButtonLoadRedGoods: true,
    }));
  };

  LoadFiveFirstGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.sort((a, b) => a.name.localeCompare(b.name))
        .slice(0, 5),
      showButtonLoadAllGoods: true,
      showButtonLoadFiveGoods: false,
      showButtonLoadRedGoods: true,
    }));
  };

  LoadRedGoods = () => {
    getGoods().then(goods => this.setState({
      goods: goods.filter(good => good.color === 'red'),
      showButtonLoadAllGoods: true,
      showButtonLoadFiveGoods: true,
      showButtonLoadRedGoods: false,
    }));
  };

  render() {
    const {
      goods,
      showButtonLoadAllGoods,
      showButtonLoadFiveGoods,
      showButtonLoadRedGoods,
    } = this.state;

    return (
      <div className="wrapper">
        <div className="App">
          <h1 className="ui center yellow aligned header">Goods List</h1>
          <div className="content">
            <div>
              <div className="ui buttons">
                {showButtonLoadAllGoods
                  ? (
                    <button
                      type="button"
                      onClick={this.LoadAllGoods}
                      className="ui button"
                    >
                  Load all goods
                    </button>
                  )
                  : ''
                }

                {showButtonLoadFiveGoods
                  ? (
                    <button
                      type="button"
                      onClick={this.LoadFiveFirstGoods}
                      className="ui button"
                    >
                      Load 5 first goods
                    </button>
                  )
                  : ''
                }

                {showButtonLoadRedGoods
                  ? (
                    <button
                      type="button"
                      onClick={this.LoadRedGoods}
                      className="ui button"
                    >
                      Load red goods
                    </button>
                  )
                  : ''
                }
              </div>
            </div>
            <div />

            <GoodsList goods={goods} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
