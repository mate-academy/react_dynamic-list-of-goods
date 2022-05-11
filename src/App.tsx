import { Component } from 'react';
import './App.scss';

interface State {
  goods: {
    id: number;
    name: string;
    isActive: boolean;
  }[];
  isVisible: boolean;
}

export class App extends Component<{}, State> {
  state: State = {
    goods: [
      { id: 1, name: 'onion', isActive: false },
      { id: 2, name: 'tomato', isActive: false },
      { id: 3, name: 'garlic', isActive: false },
    ],
    isVisible: false,
  };

  toggleGood = (id: number): void => {
    this.setState(({ goods }) => ({
      goods: goods.map(currentGood => {
        if (currentGood.id === id) {
          return {
            ...currentGood,
            isActive: !currentGood.isActive,
          };
        }

        return currentGood;
      }),
    }));
  };

  renameGood = (id: number, updatedName: string): void => {
    this.setState(({ goods }) => ({
      goods: goods.map(currentGood => {
        if (currentGood.id === id) {
          return {
            ...currentGood,
            name: updatedName,
          };
        }

        return currentGood;
      }),
    }));
  };

  addEmptyGood = () => {
    this.setState(({ goods }) => ({
      goods: [
        ...goods,
        {
          id: goods[goods.length - 1].id + 1,
          isActive: false,
          name: '',
        },
      ],
    }));
  };

  showGoods = () => {
    this.setState({ isVisible: true });
  };

  removeGood = (id: number) => {
    this.setState(({ goods }) => ({
      goods: goods.filter(currentGood => (
        currentGood.id !== id
      )),
    }));
  };

  render() {
    const { goods, isVisible } = this.state;

    return isVisible
      ? (
        <>
          <ul>
            {goods.map((good) => (
              <li
                key={good.id}
                className={good.isActive ? 'active' : ''}
                style={{ marginBottom: '15px' }}
              >
                <input
                  type="text"
                  value={good.name}
                  onChange={(event) => (
                    this.renameGood(good.id, event.target.value)
                  )}
                />

                <button
                  type="button"
                  onClick={() => this.toggleGood(good.id)}
                  style={{ marginLeft: '10px' }}
                >
                  Toggle
                </button>

                <button
                  type="button"
                  onClick={() => this.removeGood(good.id)}
                  style={{ marginLeft: '10px' }}
                >
                  🗑🗑🗑
                </button>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={this.addEmptyGood}
          >
            Add new good
          </button>
        </>
      )
      : (
        <button
          type="button"
          onClick={this.showGoods}
        >
          Show goods
        </button>
      );
  }
}
