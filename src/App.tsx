import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';

const API_URL = 'https://mate.academy/students-api/goods';
const goodsFromServer = [
  { id: 1, name: 'Potato', color: 'red' },
  { id: 2, name: 'Pear', color: 'green' },
  { id: 3, name: 'Mellon', color: 'blue' },
];

interface State {
  goods: Good[];
}

interface ResponseData<D> {
  data: D;
  error?: string;
  meta?: any;
}

type GoodsData = ResponseData<Good[]>;

export class App extends React.Component<{}, State> {
  state: State = {
    goods: goodsFromServer,
  };

  componentDidMount() {
    fetch(API_URL)
      .then(response => response.json())
      .then(({ data }: GoodsData) => {
        this.setState({
          goods: data,
        });
      });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        <GoodsList goods={goods} />
      </div>
    );
  }
}

export default App;
