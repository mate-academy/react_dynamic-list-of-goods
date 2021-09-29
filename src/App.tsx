import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

import { getAll, get5First, getRedGoods } from './api/goods';
import { GoodsList } from './components/GoodsList';
import { Button } from './components/Button';

interface State {
  goods: Good[];
  errorMessage: string;
  loading: boolean;
}

class App extends React.Component<{}, State> {
  state: State = {
    goods: [],
    errorMessage: '',
    loading: false,
  };

  getGoods = async (getGoods: () => Promise<Good[]>) => {
    try {
      this.setState({
        errorMessage: '',
        loading: true,
      });
      const goods = await getGoods();

      this.setState({
        goods,
        errorMessage: '',
        loading: false,
      });
    } catch (e) {
      const error = e as Error;

      this.setState({
        errorMessage: error.message,
        loading: false,
      });
    }
  };

  render() {
    const { goods, errorMessage, loading } = this.state;

    return (
      <main className="App">
        <h1>Dynamic list of Goods</h1>
        <section className="buttons">
          <Button name="Get all" handleChange={() => this.getGoods(getAll)} />
          <Button name="Get 5 first" handleChange={() => this.getGoods(get5First)} />
          <Button name="Get red" handleChange={() => this.getGoods(getRedGoods)} />
        </section>
        {errorMessage && (
          <div className="alert alert-danger">
            {errorMessage}
          </div>
        )}
        {!errorMessage && (loading ? (
          <h2>Please, wait...</h2>
        ) : (
          goods.length > 0 && <GoodsList goods={goods} />
        ))}
      </main>
    );
  }
}

export default App;
