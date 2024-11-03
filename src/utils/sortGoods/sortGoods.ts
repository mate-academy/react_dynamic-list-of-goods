import { Good } from '../../types/Good';
import { ESortType } from '../enums/sortTypes';

const sortGoods = (goods: Good[], sortType: ESortType, isReverse = false) => {
  return [...goods].sort((a, b) => {
    switch (sortType) {
      case ESortType.SORT_BY_CHAR:
        return isReverse
          ? b.name.localeCompare(a.name)
          : a.name.localeCompare(b.name);

      default:
        return 0;
    }
  });
};

export default sortGoods;
