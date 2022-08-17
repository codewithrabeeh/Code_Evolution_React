import React from 'react'

const Hello = () => {
    // return(
    //     <div>
    //         <h1>Hello Rabeeh</h1>
    //         <p>This is para... para... paragraph</p>
    //     </div>
    // )

    return React.createElement(
        'div', null, React.createElement(
            'h1', {id: 'id', class: 'justaclass'}, 'Hello Vishwas'))
}

export default Hello