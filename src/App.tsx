import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';
import { RequestType } from './types/RequestType';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);

  const handleClick = async (request: () => Promise<Good[]>) => {
    setHasError(false);
    setIsLoading(true);

    try {
      const response = await request();

      setIsLoading(false);
      setGoods(response);
    } catch (error) {
      setIsLoading(false);
      setHasError(true);
    }
  };

  const buttonsData = {
    [RequestType.GetAll]: {
      onClick: () => handleClick(getAll),
      content: 'all goods',
      dataInfo: 'all-button',
    },
    [RequestType.Get5First]: {
      onClick: () => handleClick(get5First),
      content: '5 first goods',
      dataInfo: 'first-five-button',
    },
    [RequestType.GetRedGoods]: {
      onClick: () => handleClick(getRedGoods),
      content: 'red goods',
      dataInfo: 'red-button',
    },
  };

  return (
    <div className="App content">
      <div className="box content-container">
        <h1 className="">Dynamic list of Goods</h1>

        {Object.values(RequestType).map(requestType => {
          const { onClick, content, dataInfo } = buttonsData[requestType];

          return (
            <button
              key={dataInfo}
              type="button"
              data-cy={dataInfo}
              onClick={onClick}
              className="button"
            >
              {`Load ${content}`}
            </button>
          );
        })}

        {isLoading && (
          <div className="loader-wrapper is-active">
            <div className="loader is-loading" />
          </div>
        )}

        {hasError && !isLoading && (
          <div className="card-header-title has-text-danger">
            An error occurred, please try again...
          </div>
        )}

        {!isLoading && !hasError && <GoodsList goods={goods} />}
      </div>
    </div>
  );
};
