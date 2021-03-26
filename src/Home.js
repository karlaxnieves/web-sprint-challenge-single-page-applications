import React from 'react'

import { useHistory } from 'react-router-dom'

export default function Home() {

    const history = useHistory()

    const routeToShop = () => {

        history.push('/pizza');
    }

    return (
        <div className='home-wrapper'>
            <img
                className='Pizza'
                img=""
                alt=""
            />
            <button
                onClick={routeToShop}
                className='md-button order-button'
            >
                Pizza?
      </button>

        </div>
    )
}
