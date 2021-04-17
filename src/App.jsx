import React from 'react';
import { getAll, get5First, getRed } from './api/goods';
import { Button } from './components/Button';
import { GoodsList } from './components/GoodsList';
import 'bulma/css/bulma.css';

export class App extends React.Component {
  state = {
    goods: null,
  }

  handleClick = async(callback) => {
    const goods = await callback();

    this.setState({ goods });
  }

  render() {
    const { goods } = this.state;

    return (
      <div className="columns is-centered">
        <div className="column is-centered is-half box">
          <div className="buttons is-flex is-justify-content-space-evenly p-5">
            <Button
              name="Load All goods"
              handleClick={() => {
                this.handleClick(getAll);
              }}
            />
            <Button
              name="Load 5 first goods"
              handleClick={() => {
                this.handleClick(get5First);
              }}
            />
            <Button
              name="Load red goods"
              handleClick={() => {
                this.handleClick(getRed);
              }}
            />
          </div>

          {goods
            ? <GoodsList goods={goods} />
            : <p className="has-text-centered is-size-3">No goods yet</p>}
        </div>
      </div>
    );
  }
}
