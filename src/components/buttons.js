import React from 'react';
import styled from 'styled-components';

import { color, dimen } from './constants'; 

const LinkButtonStyle = styled.button`
    width: 80%;
    margin: 0 auto;
    padding: ${dimen.medium} 0;
    background-color: ${color.primary500};
    outline: none;
    border: 1px solid ${color.primary600};
    border-radius: ${dimen.small};
    color: ${color.textOnPrimary};
    font-weight: 800;
    font-size: 0.8em;

    &:hover {
        border: 1px solid ${color.primary700};
        background: ${color.primary600};
        transition: all 0.5s ease-in-out;
        -webkit-transition: all 0.5s ease-in-out;
        -moz-transition: all 0.5s ease-in-out;
    }
`

const LinkButton = ({ text, targetLink }) => {
    return (
        <form action={targetLink}>
            <div style={{ textAlign: `center` }}>
                <LinkButtonStyle>{text}</LinkButtonStyle>
            </div>
        </form>
    )
}

export { LinkButton }