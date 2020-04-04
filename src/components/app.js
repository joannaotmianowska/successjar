import React from 'react';
import styled from 'styled-components';
import Form from './form';
import List from './list';

const StyledWrapper = styled.div`
    height: 100vh;
`

const App = () => (
    <StyledWrapper>
        <Form />
        <List />
    </StyledWrapper>
)

export default App;