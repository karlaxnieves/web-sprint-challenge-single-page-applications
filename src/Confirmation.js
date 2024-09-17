import React from 'react'

function Confirmation({ details }) {
    if (!details) {

        return (
            <div className='order container'>
                <h1>Congrats! Pizza is on its way! </h1>
                <div className="Dog">
                    <img
                        className='starbucks'
                        src='https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif'
                        alt=''
                    />
                </div>
            </div>
        )
    }
}


export default Confirmation