import React, {Component}  from "react";

/* class Welcome extends Component{
    render(){
        return <h2>{this.props.name} Want to Say '{this.props.heroName}'</h2>
    }
} */

class Welcome extends Component{
    render(){
        const {name, heroName} = this.props
        // const {state1, state2} = this.state
        return <h2>{name} Want to Say '{heroName}'</h2>
    }
}

export default Welcome