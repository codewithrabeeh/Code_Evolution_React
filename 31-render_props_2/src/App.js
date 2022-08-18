import React, {Component} from 'react'
import './App.css'
import ClickCounter from './component/ClickCounter'
import Counter from './component/Counter'
import HoverCounter from './component/HoverCounter'
import User from './component/User'


class App extends Component {


    render() {

        return (
            <div className='App'>

                <Counter>
                {(count, incrementCount) => <ClickCounter count={count}
                        incrementCount={incrementCount}/>
                }
                </Counter>

                <Counter>
                {(count, incrementCount) => <HoverCounter count={count}
                        incrementCount={incrementCount}/>
                }
                 </Counter> 
                
                
                {/* <ClickCounter />
        <HoverCounter />
        <User name={(isLoggedIn) => isLoggedIn ?  'Vishwas' : 'Guest'} /> */} </div>
        )
    }
}

export default App
