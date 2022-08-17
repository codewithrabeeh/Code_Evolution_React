import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter';
import FunctionClick from './components/FunctionClick';
import { Component } from 'react';
import ClassClick from './components/ClassClick';

class App extends Component {
  render(){
  return (
    <div className="App">
      {/* <FunctionClick /> */}
      <ClassClick />
      {/* <Counter /> */}
      {/* <Message /> */}
      {/* <Greet name="Rohan" heroName='Batman'>
        <p>This is para para paradise para para paradise...</p>
        <button>Click</button>
      </Greet>
      <Greet name="Raj" heroName='Superman'/>
      <Greet name="Rihan" heroName='Flash'/> */}
      {/* <Welcome name="Rohan" heroName='Batman' />
      <Welcome name="Raj" heroName='Superman' /> */}
      {/* <Welcome name="Rihan" heroName='Flash' /> */}
    </div>
  );
}
}

export default App;
