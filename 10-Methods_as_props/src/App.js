import logo from './logo.svg';
import './App.css';

import { Component } from 'react';

import ParentComponent from './components/ParentComponent';

class App extends Component {
  render(){
  return (
    <div className="App">
      <ParentComponent />
    </div>
  );
}
}

export default App;
