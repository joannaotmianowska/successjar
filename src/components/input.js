import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    text-align: center;
    border-radius: 1rem;
    padding: 1rem 0;
    border-style: none;
    width: 90%;
    justify-self: center;
    margin-bottom: 1rem;

    ::placeholder {
        color: ${({ theme }) => theme.colors.placeholder};
    }

    @media (min-width: 426px) {
        max-width: 40rem;
    }
`

const Input = () => (
    <StyledInput placeholder="Tutaj wpisz swój sukces"/>
)

export default Input;