import 'bulma';

type Props = {
  goods: Good[];
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <table className="table is-striped is-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Product</th>
        <th>Color</th>
      </tr>
    </thead>
    <tbody>
      {goods.map(good => (
        <tr key={good.id}>
          <th>{good.id}</th>
          <td style={{ color: good.color }}>{good.name}</td>
          <td>{good.color}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
