import React, { useState } from 'react';
// import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

import { Good } from './types/Good';
import { LoadButton } from './components/LoadButton/LoadButton';
import { LoadButtonSettings } from './classes/LoadButtonSettings';
import { LoadingError } from './components/LoadingError/LoadingError';
import { GoodsList } from './components/GoodsList/GoodsList';
import { getAllGoods, getFirstFiveGoods, getRedGoods } from './api/goods';

import './App.scss';

const loadButtonsSettings = [
  new LoadButtonSettings('all', 'all', getAllGoods),
  new LoadButtonSettings('5 first', 'first-five', getFirstFiveGoods),
  new LoadButtonSettings('red', 'red', getRedGoods),
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isFailedLoad, setIsFailedLoad] = useState(false);
  const [currentLoadingMode, setCurrentLoadingMode] = useState('');

  const loadGoods = async (
    callback: () => Promise<Good[]>,
    namePart: string,
  ) => {
    setIsLoaded(false);
    setIsFailedLoad(false);
    setCurrentLoadingMode(namePart);
    setIsLoading(true);

    try {
      const loadedGoods = await callback();

      if (JSON.stringify(loadedGoods) !== JSON.stringify(goods)) {
        setGoods(loadedGoods);
      }

      setIsLoaded(true);
      setIsLoading(false);
    } catch (error) {
      setIsFailedLoad(true);
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <div className="loading-options">
        {loadButtonsSettings.map(loadButtonSettings => {
          const { namePart } = loadButtonSettings;
          const isCurrentMode = namePart === currentLoadingMode;

          return (
            <LoadButton
              key={namePart}
              settings={loadButtonSettings}
              isCurrentMode={isCurrentMode}
              isLoading={isLoading}
              load={loadGoods}
            />
          );
        })}
      </div>

      {isFailedLoad && (
        <LoadingError />
      )}

      {isLoaded && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
