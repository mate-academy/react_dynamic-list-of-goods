import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../Button/Button';
import { getAll, get5First, getRedGoods } from '../../api/goods';

export const ControlBox = ({ getGoods }) => (
  <>
    <Button title="Load All" onClick={getGoods} method={getAll} />
    <Button title="Load first 5" onClick={getGoods} method={get5First} />
    <Button title="Load only red" onClick={getGoods} method={getRedGoods} />
  </>
);

ControlBox.propTypes = {
  getGoods: PropTypes.func.isRequired,
};
