import React from 'react';

interface SelectTypes {
  callbackUpdateData(value1: any, value2?: any): void;
  originalGoodsFromServer: string[];
  defaultSelect: number;
}

export const Select: React.FC<SelectTypes> = (props) => {
  const { callbackUpdateData, originalGoodsFromServer, defaultSelect } = props;
  const selectFunc = (e: React.ChangeEvent<HTMLSelectElement>) => {
    callbackUpdateData(
      originalGoodsFromServer.filter(goods => goods.length >= Number(e.target.value)),
    );
  };

  return (
    <>
      <label htmlFor="goods">
        <span>Choose length of visible items:</span>
        <select id="goods" onChange={selectFunc} value={defaultSelect}>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </label>
    </>
  );
};
