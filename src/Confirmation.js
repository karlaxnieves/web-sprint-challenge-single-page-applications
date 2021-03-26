import React from 'react'

function Confirmation({ details }) {
    if (!details) {
        return <h3>Congrats! Pizza is on its way! </h3>
    }


    return (
        <div className='order container'>
            <h2>{details.size}</h2>
            <p>Email: {details.sauce}</p>
            <p>Role: {details.add}</p>

            {
                !!details.toppings && !!details.toppings.length &&
                <div>
                    Toppings:
          <ul>
                        {details.toppings.map((like, idx) => <li key={idx}>{like}</li>)}
                    </ul>
                </div>
            }
        </div>
    )
}


export default Confirmation