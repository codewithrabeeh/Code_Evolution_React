import React, {Component} from 'react'
import withCounter from './withCounter'

class HoverCounter extends Component {

    render() {
        const {count, incrementCount} = this.props
        return (
            <div>
                <h1 onMouseOver={
                    incrementCount
                }>Hovered {count} Times</h1>
            </div>
        )
    }
}

export default withCounter(HoverCounter)
