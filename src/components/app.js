import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './form';
import List from './list';

const StyledWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr auto;
`
const StyledButton = styled.button`
    background: ${({ theme }) => theme.colors.backgroundThird};
    font-size: 1rem;
    color: ${({ theme }) => theme.colors.text};
    box-shadow: none;
    text-align: center;
    margin: .5rem 0 1rem 0;
    border-radius: 2rem;
    padding: 1rem 2rem;
    border-style: none;
    width: 20rem;
    justify-self: center;

    &:active {
        border: none;
    }
`

const App = () => {
    const [successes, setSuccesses] = useState([]);

    useEffect(() => {
        const savedList = localStorage.getItem('my-successes-list');

        if (savedList) {
            setSuccesses(JSON.parse(savedList));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('my-successes-list', JSON.stringify(successes));
    });

    const addNewSuccess = (newSuccess) => {
        setSuccesses([...successes, newSuccess])
    }

    const clearTheList = () => {
        localStorage.clear();
        setSuccesses([]);
    }

    return (
        <StyledWrapper>
            <Form addNewSuccess={addNewSuccess} />
            <List items={successes} />
            <StyledButton onClick={clearTheList}>Wyczyść listę</StyledButton>
        </StyledWrapper>
    )
}

export default App;