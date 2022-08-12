import React from 'react'

// function Greet(){
//     return <h1>Hello World!</h1>
// }

/* const Greet = ({name, heroName}) => {
return (
<div>
<h1>Hello {name} is a {heroName}</h1>
</div> 
)
} */

const Greet = (props) => {
    const {name, heroName} = props
    return (
    <div>
    <h1>Hello {name} is a {heroName}</h1>
    </div> 
    )
    }

export default Greet