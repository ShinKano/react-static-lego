import React from 'react'
import styled from 'styled-components'
//
import Button from '../components/atoms/Button'
//
import image from '../img/legopink.jpg'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <TitleBg>

        <h1>Welcome to React-Static</h1>
        <Button>Test!</Button>
        <Button primary>Test!</Button>
    </TitleBg>
  </div>
)

const TitleBg = styled.div`
    width: 100%;
    height: 300px;
    background-image: url(${image});
    background-size: cover;
    background-position: center;
}

`;