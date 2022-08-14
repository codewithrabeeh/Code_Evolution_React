import React, { Component } from 'react'

export class UserGreeting extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
  
    render() {
        
        // Fourth Approach
        return this.state.isLoggedIn && <div>Welcome Ray</div>

        // Third Approach
        /* return (
            this.state.isLoggedIn ? (
            <div>Welcome Ray</div>) 
            : (
            <div>Welcome Guest</div>
            )
        ) */

        /* Second Approach
        let message;
        if(this.state.isLoggedIn){
            message = <div>Welcome Rabeeh</div>
        } else {
            message = <div>Welcome Guest</div>
        }

        return <div>{message}</div> */
        
       /* First Approach 
          if(this.state.isLoggedIn) {
            return (
                <div>
                    Welcome Vishwas
                </div>
            )
        } else {
            return (
                <div>
                    Welcome Guest
                </div>
            )
        } */
        
    // return (
    //   <div>
    //     <div>Welcome Rabeeh</div>
    //     <div>Welcome Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting