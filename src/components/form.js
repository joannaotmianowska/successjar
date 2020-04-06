import React from 'react';
import styled from 'styled-components';
import Header from './header';

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
`
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
        /* color: ${({ theme }) => theme.colors.text}; */
    }

    @media (min-width: 426px) {
        max-width: 40rem;
    }
`
const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: none;
    text-align: center;
    margin: 1rem 0 2rem 0;
    border-radius: 2rem;
    padding: 1rem 4rem;
    border-style: none;

    &:active {
        border: none;
    }
`

const Form = ({ addNewSuccess }) => {
    let newSuccess = "";

    const handleOnChange = (e) => {
        newSuccess = e.currentTarget.value;
    }

    const handleOnClick = () => {
        addNewSuccess(newSuccess);
    }

    return (
        <StyledWrapper>
            <Header />
            <StyledInput
                onChange={handleOnChange}
                placeholder="Tutaj wpisz swój sukces"
            />
            <StyledButton onClick={handleOnClick}>
                Dodaj do listy
            </StyledButton>
        </StyledWrapper>
    )
}

export default Form;