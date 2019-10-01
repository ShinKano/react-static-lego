import React from 'react'
import styled from 'styled-components'
// Background Image pass
import legopink from '../../img/legopink.jpg'
import legoblue from '../../img/legoblue.jpg'

const HeroBG = styled.div`
    width: 100%;
    height: 60vh;
    /* background-image: url(${legopink}); */
    background-image: ${props => props.blue ? `url(${legoblue})` : `url(${legopink})`};
    background-size: cover;
    background-position: center;
    color: white;
    /* flex */
    display: flex;
    align-items: center;
    flex-flow: column;
    /* fix the hight of Navbar */
    padding-top: 4rem;
`;

export default HeroBG;