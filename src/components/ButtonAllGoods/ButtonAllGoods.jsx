import React from 'react';
import PropTypes from 'prop-types';

import Button from '@material-ui/core/Button';
import DoneAllIcon from '@material-ui/icons/DoneAll';
import { makeStyles } from '@material-ui/core/styles';
import { getAll } from '../../api/goods';

const useStyles = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #fe6b8b, #ff8e53)',
    color: 'white',
    border: 1,
    marginRight: '30px',
  },
});

export const ButtonAllGoods = ({ handlerForGoods }) => {
  const classes = useStyles();

  return (
    <Button
      onClick={() => {
        handlerForGoods(getAll);
      }}
      className={classes.root}
      startIcon={<DoneAllIcon />}
      variant="contained"
    >
      All goods
    </Button>
  );
};

ButtonAllGoods.propTypes = {
  handlerForGoods: PropTypes.func.isRequired,
};
