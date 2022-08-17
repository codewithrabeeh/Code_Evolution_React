import React from 'react'

function FunctionClick() {
  
    function clickHandler() {
        // console.log('Button Clicked')
        alert('Button Clicked')
    }

    return (
    <div>
        <button onClick={clickHandler}>Click</button> { /*it will become function calls. Handle need to be a function not function call <button onClick={clickHandler()}>Click</button> */}
    </div>
  )
}

export default FunctionClick