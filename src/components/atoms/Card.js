import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
    transition: .3s;
    background-color: #fefefe;
    &:hover {
        background-color: white;
    }
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14),
                0px 2px 1px -1px rgba(0,0,0,0.12);

    border-radius: 2px;
    height: 10rem;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
`;

export default Card;