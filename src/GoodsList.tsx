import React, { useEffect, useState } from 'react';
import { Good } from './types/Good';
import { getAll, get5First, getRedGoods } from './api/goods';

type Props = {
  sortBy: string;
};

const GoodsListComponent: React.FC<Props> = ({ sortBy }) => {
  const [goods, setGoods] = useState<Good[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!sortBy) {
      return;
    }

    const fetchGoods = async () => {
      setLoading(true); // перед початком запиту
      setError(null); // скидаємо стару помилку

      try {
        switch (sortBy) {
          case 'all': {
            const allGoods = await getAll();

            setGoods(allGoods);
            break;
          }

          case 'first-five': {
            const firstFive = await get5First();

            setGoods(firstFive);
            break;
          }

          case 'red': {
            const redGoods = await getRedGoods();

            setGoods(redGoods);
            break;
          }

          default:
            setGoods([]);
            break;
        }
      } catch (err) {
        setError('Не вдалося завантажити товари');
        // eslint-disable-next-line no-console
        console.error(err);
      } finally {
        setLoading(false); // в будь-якому випадку завершуємо
      }
    };

    fetchGoods();
  }, [sortBy]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <ul>
      {goods.map(good => (
        <li key={good.id} data-cy="good" style={{ color: good.color }}>
          {good.name}
        </li>
      ))}
    </ul>
  );
};

export const GoodsList = React.memo(GoodsListComponent);
