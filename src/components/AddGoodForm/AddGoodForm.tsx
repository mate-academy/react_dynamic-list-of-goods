import React from 'react';
import { addNewGood } from '../../api/goods';

type Props = {};
type State = {
  name: string,
  color: string,
};

export class AddGoodForm extends React.Component<Props, State> {
  state: State = {
    name: '',
    color: '',
  };

  setName = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    this.setState({
      name: value,
    });
  };

  setColor = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;

    this.setState({
      color: value,
    });
  };

  submitHandle = async (event: React.FormEvent) => {
    event.preventDefault();

    await addNewGood(this.state);
  };

  render() {
    const { name, color } = this.state;

    return (
      <form onSubmit={this.submitHandle}>
        <input
          type="text"
          value={name}
          onChange={this.setName}
        />
        <select value={color} onChange={this.setColor}>
          <option value="red">red</option>
          <option value="green">green</option>
          <option value="blue">blue</option>
        </select>

        <button type="submit">Submit</button>
      </form>
    );
  }
}
