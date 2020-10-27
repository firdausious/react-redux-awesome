import React from 'react';

import { Provider } from 'react-redux'

import Counter from './components/Counter'
import store from './redux/store'

import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Yo Redux!
        </p>

        <Provider store={store}>
          <Counter />
        </Provider>

      </header>
    </div>
  );
}

export default App;
