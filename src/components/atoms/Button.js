import React from 'react'
import styled from 'styled-components'

const Button = styled.button`
    /* Adapt the colors based on primary prop */
    background: ${props => props.primary ? "#2976D2" : "white"};
    color: ${props => props.primary ? "white" : "#2976D2"};

    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 0px solid palevioletred;
    border-radius: 3px;
    box-shadow: 0px 1px 3px 0px rgba(0,0,0,0.2),
                0px 1px 1px 0px rgba(0,0,0,0.14),
                0px 2px 1px -1px rgba(0,0,0,0.12);
`;

export default Button;
