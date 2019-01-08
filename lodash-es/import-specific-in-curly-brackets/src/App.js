import React, { Component } from 'react';
import { map, uniq, tail, times } from 'lodash-es';

import logo from './logo.svg';
import './App.css';

const numbers = [1, 5, 8, 10, 1, 5, 15, 42, 5];
console.log(numbers);

const uniqNumbers = uniq(numbers);
console.log(uniqNumbers);

const tailNumbers = tail(numbers);
console.log(tailNumbers);

const getRandomNumber = () => {
  return Math.round(Math.random() * 100);
};
const randomNumbers = times(8, getRandomNumber);
console.log(randomNumbers);

const users = [{ user: 'barney' }, { user: 'fred' }];
const usersMapped = map(users, 'user');
console.log(usersMapped);

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
