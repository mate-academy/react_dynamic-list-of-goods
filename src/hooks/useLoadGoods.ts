import { useCallback, useState } from 'react';
import { Good } from '../types/Good';

type HookReturn = [
  goods: Good[],
  isLoading: boolean,
  error: string,
  handleLoadGoods: (loadCb: () => Promise<Good[]>) => void,
];

export function useLoadGoods(): HookReturn {
  const [goods, setGoods] = useState<Good[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleLoadGoods = useCallback((loadCb: () => Promise<Good[]>) => {
    setError('');
    const loadingTimer = setTimeout(() => setIsLoading(true), 200);

    loadCb()
      .then(items => setGoods(items))
      .catch((err: Error) => setError(err.message))
      .finally(() => {
        clearTimeout(loadingTimer);
        setIsLoading(false);
      });
  }, []);

  return [goods, isLoading, error, handleLoadGoods];
}
