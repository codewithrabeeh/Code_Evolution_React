import './App.css';
import { Component } from 'react';

import NameList from './components/NameList';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <UserGreeting /> */}
      <NameList />
    </div>
  );
}
}

export default App;
