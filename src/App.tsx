import React from 'react';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';

type State = {
  goodsList: Good[] | null;
};

class App extends React.Component <{}, State> {
  state = {
    goodsList: null,
  };

  handleEvent = async (event:React.MouseEvent<HTMLButtonElement, MouseEvent>, eventType:string) => {
    event.preventDefault();

    switch (eventType) {
      case ('showAll'):
        this.setState({
          goodsList: await getAll(),
        });
        break;
      case ('showFiveFirst'):
        this.setState({
          goodsList: await get5First(),
        });
        break;
      case ('showOnlyRed'):
        this.setState({
          goodsList: await getRedGoods(),
        });
        break;

      default:
        throw new Error('Wrong type of event');
    }
  };

  render() {
    return (
      <div className="App">
        <h1 className="App__Tittle">Dynamic list of Goods</h1>
        <div className="App__Button-wrapper">
          <button
            type="button"
            onClick={
              event => {
                this.handleEvent(event, 'showAll');
              }
            }
            className="button LoadAllButton"
          >
            Load all goods
          </button>
          <button
            type="button"
            onClick={
              event => {
                this.handleEvent(event, 'showFiveFirst');
              }
            }
            className="button LoadFiveButton"
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            onClick={
              event => {
                this.handleEvent(event, 'showOnlyRed');
              }
            }
            className="button LoadFiveButton"
          >
            Load only red goods
          </button>
        </div>

        {this.state.goodsList && <GoodsList goodsList={this.state.goodsList} />}
      </div>
    );
  }
}

export default App;
