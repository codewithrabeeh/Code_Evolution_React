import './App.css';
import { Component } from 'react';

import UserGreeting from './components/UserGreeting';

class App extends Component {
  render(){
  return (
    <div className="App">
      <UserGreeting />
    </div>
  );
}
}

export default App;
