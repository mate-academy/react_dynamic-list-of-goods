import React from 'react';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { getAll, get5First, getRed } from './api/goods';
import GoodList from './components/GoodsList';

class App extends React.Component {
  state = {
    products: null,
  }

  allHandler = async() => {
    this.setState({
      products: await getAll(),
    });
  }

  fiveHandler = async() => {
    this.setState({
      products: await get5First(),
    });
  }

  redHandler = async() => {
    this.setState({
      products: await getRed(),
    });
  }

  render() {
    const { products } = this.state;

    return (
      <>
        <h1>Dynamic list of goods</h1>
        <Button
          variant="success"
          type="button"
          onClick={this.allHandler}
        >
          Get All
        </Button>
        <Button
          variant="dark"
          type="button"
          onClick={this.fiveHandler}
        >
          Get Five
        </Button>
        <Button
          variant="danger"
          type="button"
          onClick={this.redHandler}
        >
          Get red
        </Button>
        {products && <GoodList products={products} />}
      </>
    );
  }
}

export default App;
