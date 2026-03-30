import React from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';

// Removidas as extensões .ts para o linter parar de reclamar no App.tsx
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

export const App: React.FC = () => {
  const [goods, setGoods] = React.useState<Good[]>([]);
  // Estado para armazenar o erro conforme pedido pelo mentor
  const [errorMessage, setErrorMessage] = React.useState('');

  const loadAll = () => {
    setErrorMessage('');
    getAll()
      .then(gds => setGoods(gds))
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  const load5First = () => {
    setErrorMessage('');
    get5First()
      .then(gds => setGoods(gds))
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  const loadRedGoods = () => {
    setErrorMessage('');
    getRedGoods()
      .then(gds => setGoods(gds))
      .catch(err => {
        setErrorMessage(err.message);
      });
  };

  return (
    <div className="App">
      <h1>Dynamic list of Goods</h1>

      {/* Exibição da mensagem de erro se o estado errorMessage não estiver vazio */}
      {errorMessage && <p>Error: {errorMessage}</p>}

      <button onClick={loadAll} type="button" data-cy="all-button">
        Load all goods
      </button>

      <button onClick={load5First} type="button" data-cy="first-five-button">
        Load 5 first goods
      </button>

      <button onClick={loadRedGoods} type="button" data-cy="red-button">
        Load red goods
      </button>

      <GoodsList goods={goods} />
    </div>
  );
};
