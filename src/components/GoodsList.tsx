type Props = {
  preparedGoods: Good[];
};

export const GoodsList: React.FC<Props> = ({ preparedGoods }) => (
  <ul className="goodsList">
    {preparedGoods.map(good => {
      return (
        <li
          className="goodsList__item"
          style={{ color: good.color }}
        >
          {good.name}
        </li>
      );
    })}
  </ul>
);
