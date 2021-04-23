import React from 'react'
import { Link, useHistory } from 'react-router-dom'



export default function Home() {


    const history = useHistory()

    const routeToShop = () => {

        history.push('/pizza');
    }

    return (

        <div className="container">

            <div className='App'>
                <nav>
                    <div className='nav-links'>
                        <React.Fragment>
                            <Link to="/">Home</Link>
                            <br />
                            <Link to="/help">Help</Link>
                        </React.Fragment>
                    </div>
                </nav>
                <div className='pizza'>
                    <h1 className='store-header'>Your favorite food, delivered while coding!</h1>

                    <button
                        onClick={routeToShop}
                        className='md-button order-button'
                    >
                        Pizza?
      </button>
                </div>
                <div className='food-delivery'>
                    <div className="delivery">
                        <img
                            className='mcdonals'
                            src='https://images.unsplash.com/photo-1610459468487-37acdfb1e888?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                            alt=''
                        />
                        <h4>McDonald's</h4>
                        <h5>$. American -Fast Food -Burgers</h5>
                        <button className="food">
                            20-30 Min.
      </button>
                        <button className="food">
                            $5.99 Delivery Fee
      </button>
                    </div>

                    <div className="delivery">
                        <img
                            className='sweetgreens'
                            src='https://images.unsplash.com/photo-1561043433-aaf687c4cf04?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                            alt=''
                        />
                        <h4>Sweet Greens</h4>
                        <h5>$. -Healthy -Salads</h5>
                        <button className="food">
                            30-45 Min.
      </button>
                        <button className="food">
                            $4.99 Delivery Fee
      </button>
                    </div>

                    <div className="delivery">
                        <img
                            className='starbucks'
                            src='https://images.unsplash.com/photo-1615680022554-546b62de530b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'
                            alt=''
                        />
                        <h4>Starbucks</h4>
                        <h5>$. -Cafe -Coffee & Tea -Breakfast and Brunch</h5>
                        <button className="food">
                            10-20 Min.
      </button>
                        <button className="food">
                            $3.99 Delivery Fee
      </button>
                    </div>
                </div>
            </div>
        </div>


    )
}
