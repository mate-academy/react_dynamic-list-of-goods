import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { getAll, get5First, getRedGoods } from './api/goods';
import { Good } from './types/Good';

export const App: React.FC = () => {
  const [goodsFromServer, setGoodsFromServer] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleButtonAll = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const goods = await getAll();

      setGoodsFromServer(goods);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
      setGoodsFromServer([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButton5first = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const goods = await get5First();

      setGoodsFromServer(goods);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
      setGoodsFromServer([]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleButtonRedGoods = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const goods = await getRedGoods();

      setGoodsFromServer(goods);
    } catch (e) {
      setError('Failed to load goods. Please try again.');
      setGoodsFromServer([]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      <button
        type="button"
        data-cy="all-button"
        onClick={handleButtonAll}
        disabled={isLoading}
      >
        Load all goods
      </button>

      <button
        type="button"
        data-cy="first-five-button"
        onClick={handleButton5first}
        disabled={isLoading}
      >
        Load 5 first goods
      </button>

      <button
        type="button"
        data-cy="red-button"
        onClick={handleButtonRedGoods}
        disabled={isLoading}
      >
        Load red goods
      </button>

      {error && <div className="error-message">{error}</div>}

      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <GoodsList goods={goodsFromServer} />
      )}
    </div>
  );
};
