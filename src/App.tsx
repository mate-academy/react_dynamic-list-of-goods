import React, { useState } from 'react';
import classNames from 'classnames';
import 'bulma/css/bulma.min.css';

import { Good } from './types/Good';
import { LoadButtonSettings } from './classes/LoadButtonSettings';
import { GoodsList } from './GoodsList';
import { getAllGoods, getFirstFiveGoods, getRedGoods } from './api/goods';

import './App.scss';

const loadButtonsSettings = [
  new LoadButtonSettings('all', 'all', getAllGoods),
  new LoadButtonSettings('5 first', 'first-five', getFirstFiveGoods),
  new LoadButtonSettings('red', 'red', getRedGoods),
];

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentLoadingMode, setCurrentLoadingMode] = useState('');

  return (
    <div className="App">
      <h1 className="title">
        Dynamic list of Goods
      </h1>

      <div className="loading-options">
        {loadButtonsSettings.map(loadButtonSettings => {
          const {
            namePart,
            dataCyPrefix,
            onClickCallback,
          } = loadButtonSettings;

          const isCurrentlyUsed = namePart === currentLoadingMode;

          return (
            <button
              type="button"
              className={classNames(
                'button',
                'is-info',
                { 'is-light': isCurrentlyUsed },
              )}
              data-cy={`${dataCyPrefix}-button`}
              onClick={async () => {
                const loadedGoods = await onClickCallback();

                if (JSON.stringify(loadedGoods) !== JSON.stringify(goods)) {
                  setGoods(loadedGoods);
                }

                setIsLoaded(true);
                setCurrentLoadingMode(namePart);
              }}
            >
              {`Load ${namePart} goods`}
            </button>
          );
        })}
      </div>

      {isLoaded && (
        <GoodsList goods={goods} />
      )}
    </div>
  );
};
