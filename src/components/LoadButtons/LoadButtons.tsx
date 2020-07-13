import React from 'react';
import { Button } from '../Button/Button';
import { fetchData } from '../../api/fetchData';
import { Good } from '../../interfaces/good';

interface Props {
  updateList(list: Good[]): void;
  setLoading(status: boolean): void;
  setError(status: boolean): void;
}

export const LoadButtons: React.FC<Props> = (props) => {
  const { updateList, setLoading, setError } = props;

  const API_URL = 'https://mate.academy/students-api/goods';

  const getAll = (data: Good[]) => {
    return data;
  };

  const filterFirstFive = (data: Good[]) => {
    return data.sort((a, b) => {
      return (a.name > b.name) ? 1 : -1;
    }).splice(0, 5);
  };

  const filterReds = (data: Good[]) => {
    return data.filter(good => good.color === 'red');
  };

  const loadGoods = (callback: (data: Good[]) => Good[] = getAll) => {
    setError(false);
    setLoading(true);

    fetchData<Good>(API_URL)
      .then(data => {
        setLoading(false);
        updateList(callback(data.data));
      })
      .catch(() => {
        setLoading(false);
        setError(true);
      });
  };

  return (
    <div className="control">
      <Button
        name="Load All goods"
        handle={() => {
          loadGoods();
        }}
      />
      <Button
        name="Load 5 first goods"
        handle={() => {
          loadGoods(filterFirstFive);
        }}
      />
      <Button
        name="Load red goods"
        handle={() => {
          loadGoods(filterReds);
        }}
      />
    </div>
  );
};
