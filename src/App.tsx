import { FC, useCallback, useState } from 'react';
import './App.scss';
import { Box } from '@mui/material';

import { FilterButton } from './components/Button/Button';
import { GoodsList } from './components/Goodlist/GoodsList';
import { Loader } from './components/Loader/Loader';

import { getAll, get5First, getRed } from './api/goods';
import { Good } from './types/Good';

export const App: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [isFetched, setIsFetched] = useState(false);
  const [lastClickedButton, setLastClickedButton] = useState<string>('');

  const handleClick = useCallback(
    async (callback: () => Promise<Good[]>, buttonName: string) => {
      if (isFetched || lastClickedButton === buttonName) {
        return;
      }

      setIsLoading(true);
      setIsFetched(true);

      try {
        setGoods(await callback());
        setLastClickedButton(buttonName);
      } catch {
        setError(true);
      } finally {
        setIsLoading(false);
        setIsFetched(false);
      }
    }, [lastClickedButton, isFetched],
  );

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
      }}
    >
      <div className="App">
        <h1 style={{ color: '#42a5f5' }}>
          Dynamic list of Goods
        </h1>

        <FilterButton
          dataCy="all-button"
          onClick={() => handleClick(getAll, 'all-button')}
        >
          Load all goods
        </FilterButton>

        <FilterButton
          dataCy="first-five-button"
          onClick={() => handleClick(get5First, 'first-five-button')}
        >
          Load 5 first goods
        </FilterButton>

        <FilterButton
          dataCy="red-button"
          onClick={() => handleClick(getRed, 'red-button')}
        >
          Load red goods
        </FilterButton>

        {isLoading ? (
          <Loader />
        ) : (
          <>
            {error && (
              <p style={{ color: 'red' }}>
                Error. Something went wrong
              </p>
            )}

            <GoodsList goods={goods} />
          </>
        )}
      </div>
    </Box>
  );
};
