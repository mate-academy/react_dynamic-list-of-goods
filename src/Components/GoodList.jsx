// import { render } from 'node-sass';
import React from 'react';
import './GoodList.scss';

export class GoodList extends React.Component {
  state = {
    list: null,
  }

  componentDidMount() {
    this.recordListFromServer();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.show !== this.props.show) {
      this.recordListFromServer();
    }
  }

  recordListFromServer = () => {
    this.props.goods.then(res => {
      this.setState({list: [...res]});
    });
  }

  render() {
    const { list } = this.state;

    return (
      <>
      {list && (
        <>
          <ul className="list">
          {list.map((elem, index) => (
            <li key={elem.id} className={elem.color}>
              {index === list.length - 1 && <span>last good---</span>}
              {elem.name}
            </li>
          ))}
        </ul>
      </>
      )}
      </>
    );
  }
}