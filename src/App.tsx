import classnames from 'classnames';
import React, { useState } from 'react';
import { get5First, getAll, getRedGoods } from './api/goods';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';

enum Tab {
  None = 'none',
  All = 'all',
  First5 = 'first5',
  Red = 'Red',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [currentTab, setCurrentTab] = useState(Tab.None);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const handleGoodsLoad = (
    getGoods: () => Promise<Good[]>,
    tab: Tab,
  ) => {
    return () => {
      if (tab !== currentTab) {
        setIsLoading(true);
        setIsError(false);

        getGoods()
          .then(setGoods)
          .catch(() => setIsError(true))
          .finally(() => setIsLoading(false));

        setCurrentTab(tab);
      }
    };
  };

  return (
    <div className="App">

      <div className="panel is-primary is-flex is-flex-direction-column">
        <h1
          className="panel-heading has-text-centered"
        >
          Dynamic list of Goods
        </h1>

        <p className="panel-tabs p-2 has-background-primary">
          <button
            type="button"
            className={classnames(
              'button',
              'is-light',
              'is-outlined',
              'mr-5',
              { 'is-loading': isLoading && currentTab === Tab.All },
            )}
            data-cy="all-button"
            onClick={handleGoodsLoad(getAll, Tab.All)}
          >
            Load all goods
          </button>

          <button
            type="button"
            className={classnames('button is-light is-outlined mr-5', {
              'is-loading': isLoading && currentTab === Tab.First5,
            })}
            data-cy="first-five-button"
            onClick={handleGoodsLoad(get5First, Tab.First5)}
          >
            Load 5 first goods
          </button>

          <button
            type="button"
            className={classnames('button is-light is-outlined', {
              'is-loading': isLoading && currentTab === Tab.Red,
            })}
            data-cy="red-button"
            onClick={handleGoodsLoad(getRedGoods, Tab.Red)}
          >
            Load red goods
          </button>
        </p>
      </div>

      <p className="">
        {isError ? (
          <p>!!!Loading Error!!!</p>
        ) : (
          <GoodsList goods={goods} />
        )}
      </p>

    </div>
  );
};
