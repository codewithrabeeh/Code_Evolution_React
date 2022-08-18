import React, {Component} from 'react'
import './App.css'
import ComponentE from './component/ComponentE'
// import ComponentF from './component/ComponentF'
import { UserProvider } from './component/userContext'


class App extends Component {


    render() {

        return (
            <div className='App'>
                <UserProvider value='Ray'>
                    <ComponentE />
                </UserProvider>
            </div>
        )
    }
}

export default App
