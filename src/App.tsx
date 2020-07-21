import React from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';
import { loadGoods } from './api';

interface State {
  goods: Good[];
  error: string;
}

export class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    error: '',
  };

  componentDidMount() {
    loadGoods()
      .then((goods) => {
        this.setState({
          goods,
        });
      })
      .catch(error => this.setState({ error: error.message }));
  }

  render() {
    const { goods, error } = this.state;

    return (
      <div className="container">
        <h1>Dynamic list of Goods</h1>
        {error
          ? (<p>{error}</p>)
          : (<GoodsList goods={goods} />)}
      </div>
    );
  }
}

export default App;
