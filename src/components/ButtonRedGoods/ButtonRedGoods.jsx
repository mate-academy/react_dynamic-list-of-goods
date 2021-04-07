import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { makeStyles } from '@material-ui/core/styles';
import { getRedGoods } from '../../api/goods';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #d32f2f, #f44336)',
    color: 'white',
    border: 1,
  },
});

export const ButtonRedGoods = ({ handlerForGoods }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={() => {
        handlerForGoods(getRedGoods);
      }}
      className={classes.root}
      startIcon={<DoneAllIcon />}
      variant="contained"
    >
      red goods
    </Button>
  );
};

ButtonRedGoods.propTypes = {
  handlerForGoods: PropTypes.func.isRequired,
};
