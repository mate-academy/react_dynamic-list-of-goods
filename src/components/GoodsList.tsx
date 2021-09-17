import React from 'react';
import { get5First, getAll, getRedGoods } from '../api/goods';
import './GoodsList.scss';

type Props = {
  getAll: () => Promise<Good[]>;
  get5First: () => Promise<Good[]>;
  getRedGoods: () => Promise<Good[]>;
};
type State = {
  goods: Good[];
};

export class GoodsList extends React.Component<Props, State> {
  state: State = {
    goods: [],
  };

  render() {
    const { goods } = this.state;

    return (
      <div className="text-center container w-50">
        {
          this.state.goods.length > 0
            && (
              <div
                className="
                  list-of-goods__container
                  pt-3
                  pb-3
                  mb-3"
              >
                <ul className="list-group d-flex flex-column align-items-center justify-content-around">
                  {goods.map(good => {
                    return (
                      <li
                        key={good.id}
                        className="list-group-item w-25 mb-1"
                        style={{ color: good.color }}
                      >
                        {good.name}
                      </li>
                    );
                  })}
                </ul>
              </div>
            )
        }
        <div className="buttons-group d-flex justify-content-around">
          <button
            type="button"
            className="btn btn-primary w-25"
            onClick={() => {
              getAll()
                .then(goodsFromServer => {
                  this.setState({
                    goods: goodsFromServer,
                  });
                });
            }}
          >
            Load All goods
          </button>
          <button
            type="button"
            className="btn btn-secondary w-25"
            onClick={() => {
              get5First()
                .then(goodsFromServer => {
                  this.setState({
                    goods: goodsFromServer,
                  });
                });
            }}
          >
            Load 5 first goods
          </button>
          <button
            type="button"
            className="btn btn-danger w-25"
            onClick={() => {
              getRedGoods()
                .then(goodsFromServer => {
                  this.setState({
                    goods: goodsFromServer,
                  });
                });
            }}
          >
            Load red goods
          </button>
        </div>
      </div>
    );
  }
}
