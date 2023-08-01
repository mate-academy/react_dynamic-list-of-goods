import React, { useEffect, useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

enum ServerRequest {
  AllGoods = 'ALL',
  FiveFirst = 'FiveFirst',
  OnlyRed = 'OnlyRed',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [
    serverReqeust,
    setServerReqeust,
  ] = useState<ServerRequest | null>(null);

  useEffect(() => {
    switch (serverReqeust) {
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
  }, [serverReqeust]);

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={() => setServerReqeust(ServerRequest.AllGoods)}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={() => setServerReqeust(ServerRequest.FiveFirst)}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={() => setServerReqeust(ServerRequest.OnlyRed)}
      >
        Load red goods
      </button>
      {serverReqeust !== null && <GoodsList goods={goods} />}
    </div>
  );
};
