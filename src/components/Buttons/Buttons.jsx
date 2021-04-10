import React from 'react';
import PropTypes from 'prop-types';
import { getAll, get5First, getRedGoods } from '../../api/goods';

import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

export const Buttons = ({ addGoods }) => (
  <ButtonGroup
    variant="text"
    color="primary"
    aria-label="text primary button group"
  >
    <Button
      onClick={() => addGoods(getAll)}
    >
      Show all goods
    </Button>
    <Button
      onClick={() => addGoods(get5First)}
    >
      Show firs five goods
    </Button>
    <Button
      onClick={() => addGoods(getRedGoods)}
    >
      Show red goods
    </Button>
  </ButtonGroup>
)

ButtonGroup.propTypes = {
  addGoods: PropTypes.func.isRequired,
};
