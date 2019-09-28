import React from 'react'
import styled from 'styled-components'
//
import Button from '../components/atoms/Button'
//
import image from '../img/legopink.jpg'

export default () => (
  <div style={{ textAlign: 'center' }}>
    <h1>Welcome to React-Static</h1>
    <Button>Test!</Button>
    <Button primary>Test!</Button>
    <img src={image} />
    <Bg />
  </div>
)

const Bg = styled.div`
    width: 300px;
    height: 300px;
    background-image: url(${image});
`;