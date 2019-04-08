import './App.css';

import { Button } from 'antd';
import React, { Component } from 'react';
import Test from './Test.tsx';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button type="primary">Button</Button>
        <Test />
      </div>
    );
  }
}

export default App;
