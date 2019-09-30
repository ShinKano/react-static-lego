import React from 'react'
import styled from 'styled-components'

const Punctuation = () => (
    <div className="is-flex">
        <Red />
        <Yellow />
        <Green />
    </div>
)

export default Punctuation;

const Red = styled.div`
    background-color: #ff5722;
    height: 4px;
    width: 16px;
    border-radius: 2px;
    margin: 0 2px 4px;
`;

const Yellow = styled.div`
    background-color: #ffeb3b;
    height: 4px;
    width: 16px;
    border-radius: 2px;
    margin: 0 2px 4px;
`;

const Green = styled.div`
    background-color: #4caf50;
    height: 4px;
    width: 16px;
    border-radius: 2px;
    margin: 0 2px 4px;
`;

