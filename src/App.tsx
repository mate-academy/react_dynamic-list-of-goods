import React, { useState } from 'react';
import './App.scss';
import { GoodsList } from './GoodsList';
import { Good } from './types/Good';
import { get5First, getAll, getRedGoods } from './api/goods';
import { RequestType } from './types/RequestType';

export const App: React.FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [currGoodsType, setCurrGoodsType] = useState<RequestType | null>(null);

  const handleClick = async (
    request: () => Promise<Good[]>,
    requestType: RequestType,
  ) => {
    if (requestType === currGoodsType) {
      return;
    }

    setHasError(false);
    setIsLoading(true);

    try {
      const allGoods = await request();

      setCurrGoodsType(requestType);
      setGoods(allGoods);
    } catch (error) {
      setHasError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const buttonsData = {
    [RequestType.GetAll]: {
      onClick: () => handleClick(getAll, RequestType.GetAll),
      content: 'all goods',
      dataInfo: 'all-button',
    },
    [RequestType.Get5First]: {
      onClick: () => handleClick(get5First, RequestType.Get5First),
      content: '5 first goods',
      dataInfo: 'first-five-button',
    },
    [RequestType.GetRedGoods]: {
      onClick: () => handleClick(getRedGoods, RequestType.GetRedGoods),
      content: 'red goods',
      dataInfo: 'red-button',
    },
  };

  return (
    <div className="App content">
      <div className="box content-container">
        <h1>Dynamic list of Goods</h1>

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

        {!isLoading && hasError && (
          <div className="card-header-title has-text-danger">
            An error occurred, please try again...
          </div>
        )}

        {!isLoading && !hasError && (
          <GoodsList goods={goods} />
        )}
      </div>
    </div>
  );
};
