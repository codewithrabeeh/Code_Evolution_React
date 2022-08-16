import './App.css';
import { Component } from 'react';

import Stylesheet from './components/Stylesheet';
import Inline from './components/Inline';
import './appStyles.css'
import styles from './appStyles.module.css'

class App extends Component {
  render(){
  return (
    <div className="App">
        <h1 className='error'>Error (From Regular Stylesheet)</h1>
        <h1 className={styles.success}>Success (From Module Stylesheet)</h1>

      {/* <Stylesheet primary={true} /> */}
      <Inline />
    </div>
  );
}
}

export default App;
