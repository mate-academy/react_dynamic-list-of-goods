interface Good {
  id: number;
  name: string;
  color: string;
}

type Props = {
  goods: Good[],
};

export const GoodsList: React.FC<Props> = ({ goods }) => (
  <table className="table is-narrow">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Color</th>
      </tr>
    </thead>

    <tbody>
      {goods.map(good => (
        <tr key={good.id} style={{ color: good.color }}>
          <td>{good.id}</td>
          <td>{good.name}</td>
          <td>{good.color}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
