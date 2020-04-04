import React from 'react';
import styled from 'styled-components';
import Form from './form';
import List from './list';

const StyledWrapper = styled.div`
    height: 100vh;
    display: grid;
    grid-template-rows: 1fr 2fr;
`

const App = () => (
    <StyledWrapper>
        <Form />
        <List />
    </StyledWrapper>
)

export default App;