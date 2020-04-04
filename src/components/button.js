import React from 'react';
import styled from 'styled-components';
import { theme } from "../utils/theme"

const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: none;
    text-align: center;
    margin: 1rem 0;
    border-radius: 2rem;
    padding: 1rem 4rem;

    &:active {
        border: none;
    }
`

const handleOnClick = (e) => {
    e.preventDefault();
    console.log('clicked')
}

const Button = () => (
    <StyledButton onClick={handleOnClick}>Dodaj do listy</StyledButton>
)
export default Button;