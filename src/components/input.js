import React from 'react';
import styled from 'styled-components';
import { theme } from "../utils/theme"

const StyledInput = styled.input`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: none;
    text-align: center;
    border-radius: 1rem;
    padding: 1rem 4rem;
`

const Input = () => (
    <StyledInput placeholder="Tutaj wpisz swój sukces"/>
)

export default Input;