import React from 'react';
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from '@material-ui/core';

import { GoodsList } from './components/GoodsList';
import goodsImages from './api/goodsImages.json';

import './App.scss';

import {
  getAll,
  get5First,
  getGoodsByColor,
} from './api/goods';

class App extends React.Component {
  state = {
    goodsImages,
    color: '',
    goods: [],
  }

  handleChange = (event, callBack) => {
    const { name, value } = event.target;

    if (name === 'color') {
      callBack(value)
        .then(goods => this.setState({
          goods, [name]: value,
        }));
    } else {
      callBack()
        .then(goods => this.setState({
          goods, color: '',
        }));
    }
  }

  render() {
    const { color, goods, goodsImages: images } = this.state;

    return (
      <div className="App">
        <h1>Dynamic list of Goods</h1>
        <div className="controlers">

          <button
            type="button"
            name="goods"
            onClick={event => this.handleChange(event, getAll)}
          >
            All Goods
          </button>

          <button
            type="button"
            name="goods"
            onClick={event => this.handleChange(event, get5First)}
          >
            5 First Goods
          </button>

          <FormControl
            variant="outlined"
            style={{ minWidth: '150px' }}
          >
            <InputLabel id="demo-simple-select-outlined-label">
              Color
            </InputLabel>
            <Select
              labelId="demo-simple-select-outlined-label"
              id="demo-simple-select-outlined"
              style={{ color }}
              name="color"
              value={color}
              onChange={event => this.handleChange(event, getGoodsByColor)}
              label="Color"
            >
              <MenuItem value="red" style={{ color: 'rgb(245, 145, 145)' }}>
                RED
              </MenuItem>

              <MenuItem value="green" style={{ color: 'rgb(122, 228, 122)' }}>
                GREEN
              </MenuItem>

              <MenuItem value="blue" style={{ color: 'rgb(119, 192, 255)' }}>
                BLUE
              </MenuItem>
            </Select>

          </FormControl>

        </div>
        <div className="board">
          {
            !goods.length
              ? (
                <img
                  className="app-img"
                  // eslint-disable-next-line
                  src="https://as2.ftcdn.net/jpg/00/95/35/07/500_F_95350786_ZhvM8jN2EYu74LJ3jGqLQamvwpCtv2kL.jpg"
                  alt="123123123"
                />
              )
              : (
                <GoodsList
                  goods={goods}
                  images={images}
                />
              )
          }

        </div>

      </div>

    );
  }
}

export default App;
