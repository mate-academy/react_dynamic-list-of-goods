import { Good } from './types/Good';

type Props = {
  goods: Good[],
};

type Callback = (goods1: Props, good2: Props) => boolean;

export const arePropsEqual: Callback = (prevProps, nextProps) => {
  if (prevProps.goods.length !== nextProps.goods.length) {
    return false;
  }

  return prevProps.goods.every(
    (good, index) => good.id === nextProps.goods[index].id,
  );
};
