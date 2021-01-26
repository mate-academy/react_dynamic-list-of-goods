import React from 'react';
import { Buttons } from './components/Buttons';
import { GoodsList } from './components/GoodsList';
import './App.scss';

// or
// import * as goodsAPI from './api/goods';

class App extends React.Component {
  state ={
    goods: [],
  }

  handleGoods = (goods) => {
    this.setState({
      goods,
    });
  }

  getGoods = (callback) => {
    callback()
      .then(this.handleGoods);
  }

  cleanGoods = () => {
    this.handleGoods([]);
  }

  render() {
    const { goods } = this.state;
    const { cleanGoods, getGoods } = this;

    return (
      <div className="app">
        <h1 className="app__title">Dynamic list of Goods</h1>

        {
          goods.length === 0
            ? (<Buttons getGoods={getGoods} />)
            : (
              <>
                <button
                  type="button"
                  onClick={cleanGoods}
                  className="button is-dark"
                >
                  Back
                </button>
                <GoodsList goods={goods} />
              </>
            )
        }
      </div>
    );
  }
}

export default App;
