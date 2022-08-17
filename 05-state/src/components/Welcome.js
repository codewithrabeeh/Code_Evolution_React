import React, {Component}  from "react";

class Welcome extends Component{
    render(){
        return <h2>{this.props.name} Want to Say '{this.props.heroName}'</h2>
    }
}

export default Welcome