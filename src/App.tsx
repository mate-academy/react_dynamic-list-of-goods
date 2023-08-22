import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';

enum ServerRequest {
  AllGoods = 'ALL',
  FiveFirst = 'FiveFirst',
  OnlyRed = 'OnlyRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [
    serverRequest,
    setServerRequest,
  ] = useState<ServerRequest | null>(null);

  useEffect(() => {
    switch (serverRequest) {
      case (ServerRequest.AllGoods):
        getAll().then(setGoods);
        break;
      case (ServerRequest.FiveFirst):
        get5First().then(setGoods);
        break;
      case (ServerRequest.OnlyRed):
        getRedGoods().then(setGoods);
        break;
      default:
        break;
    }
  }, [serverRequest]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setServerRequest(ServerRequest.AllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setServerRequest(ServerRequest.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setServerRequest(ServerRequest.OnlyRed)}
      >
        Load red goods
      </button>

      {serverRequest !== null && <GoodsList goods={goods} />}
    </div>
  );
};
