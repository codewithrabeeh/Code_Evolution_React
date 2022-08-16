import React from 'react'

const heading = {
    fontSize: '72px',
    color: 'blue'
}

function Inline() {
  return (
    <div>
        {/* <h1 className='error'>Error</h1> */}
        {/* <h1 className={styles.success}>Success (From Module Stylesheet)</h1> */} {/* Shows error because you can't use it in child components */}
        <h1 style={heading}>Inline</h1>
    </div>
  )
}

export default Inline