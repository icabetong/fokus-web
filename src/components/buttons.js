import React from 'react';
import styled from 'styled-components';

import { Colors, Spaces } from './constants'; 

const LinkButtonStyle = styled.button`
    width: 80%;
    margin: 0 auto;
    padding: ${Spaces.medium} 0;
    background-color: ${Colors.primary500};
    outline: none;
    border: none;
    border-radius: ${Spaces.small};
    color: ${Colors.textOnPrimary};
    font-weight: 800;
    font-size: 0.8em;

    &:hover {
        background: ${Colors.primary600};
        box-shadow: 2px 2px 2px ${Colors.shadow};
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