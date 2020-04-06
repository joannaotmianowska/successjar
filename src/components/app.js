import React, { useState } from 'react';
import styled from 'styled-components';
import Form from './form';
import List from './list';

const StyledWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr;
`

const App = () => {
    const [successes, setSuccesses] = useState([]);

    const addNewSuccess = (newSuccess) => {
        setSuccesses([...successes, newSuccess])
    }

    return (
        <StyledWrapper>
            <Form addNewSuccess={addNewSuccess} />
            <List items={successes} />
        </StyledWrapper>
    )
}

export default App;