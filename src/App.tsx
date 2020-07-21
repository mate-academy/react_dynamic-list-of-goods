import React, { useState, FC, useEffect } from 'react';
import './App.css';
import { GoodsList } from './components/GoodsList';
import { Good } from './types';
import { loadGoods } from './api';

// interface State {
//   goods: Good[];
//   error: string;
// }

// export class App extends React.Component<{}, State> {
//   state: State = {
//     goods: [],
//     error: '',
//   };

//   componentDidMount() {
//     loadGoods()
//       .then((goods) => {
//         this.setState({
//           goods,
//         });
//       })
//       .catch(error => this.setState({ error: error.message }));
//   }

//   render() {
//     const { goods, error } = this.state;

//     return (
//       <div className="container">
//         <h1>Dynamic list of Goods</h1>
//         {error
//           ? (<p>{error}</p>)
//           : (<GoodsList goods={goods} />)}
//       </div>
//     );
//   }
// }

// export default App;

const AppHooks: FC = () => {
  const [goods, setGoods] = useState<Good[]>([]); // touple
  const [error, setError] = useState(''); // touple

  useEffect(() => {
    loadGoods()
      .then(goodsFromServer => setGoods(goodsFromServer))
      .catch(errorr => setError(errorr.message));
  }, []);

  return (
    <div className="container">
      <h1>Dynamic list of Goods</h1>
      {error
        ? (<p>{error}</p>)
        : (<GoodsList goods={goods} />)}
    </div>
  );
};

export {
  AppHooks as App,
};
