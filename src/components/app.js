import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Form from './form';
import List from './list';

const testSuccesses = ['test success 1', 'test success 2', 'test success 3'];

const StyledWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr;
`



const App = () => {
    const [successes, setSuccesses ] = useState([]);

    const addNewSuccess = (newSuccess) => {
        console.log('new success', newSuccess)
        const currentList = successes;
        const newList = [ ...currentList, newSuccess ];
        console.log('newList', newList)
        return newList;
    }

    useEffect(() => {
        console.log('useffect')
        setSuccesses(testSuccesses);
    }, [])

    return (
        <StyledWrapper>
            <Form addNewSuccess={addNewSuccess} />
            <List items={successes} />
        </StyledWrapper>
    )
}

export default App;