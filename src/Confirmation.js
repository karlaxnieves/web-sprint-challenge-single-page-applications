import React from 'react'
import styled from 'styled-components'

const Image = styled.img`
height: 40%;
width:50%;
`

const Div = styled.div`
display: flex;
justify-content: center;
`
const H3 = styled.h3`
display: flex;
justify-content: center;
`

function Confirmation({ details }) {
    if (!details) {

        return (
            <div className='order container'>
                <h1>Congrats! Pizza is on its way! </h1>
                <H3>Enjoy this Dog with Pizza!</H3>
                <Div>
                    <Image
                        className='starbucks'
                        src='https://media.giphy.com/media/9fuvOqZ8tbZOU/giphy.gif'
                        alt=''
                    />
                </Div>
            </div>
        )
    }
}


export default Confirmation