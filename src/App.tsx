import React from 'react';
import { GoodsList } from './components/GoodsList';
import './App.scss';

import {
  getAll,
  get5First,
  getRedGoods,
} from './api/goods';

type State = {
  goods: Good[],
  showGoods: Good[],
};

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    showGoods: [],
  };

  async componentDidMount() {
    const showGoods = await getAll();

    this.setState({ showGoods });
    this.setState({
      goods: showGoods,
    });
  }

  sort = (name: string) => {
    switch (name) {
      case 'all':
        this.setState(state => ({
          goods: state.showGoods,
        }));
        break;

      case 'five':
        this.setState(state => ({
          goods: get5First(state.showGoods),
        }));
        break;

      case 'red':
        this.setState(state => ({
          goods: getRedGoods(state.showGoods),
        }));
        break;

      default:
        break;
    }
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1 className="container__title">Dynamic list of Goods</h1>
        <div className="buttons">
          <button
            name="all"
            type="button"
            className="button"
            onClick={(event) => {
              this.sort(event.currentTarget.name);
            }}
          >
            All
          </button>

          <button
            name="five"
            type="button"
            className="button"
            onClick={(event) => {
              this.sort(event.currentTarget.name);
            }}
          >
            5
          </button>
          <button
            name="red"
            type="button"
            className="button"
            onClick={(e) => {
              this.sort(e.currentTarget.name);
            }}
          >
            Red
          </button>
        </div>

        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
