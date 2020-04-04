import React from 'react';
import styled from 'styled-components';
import Header from './header';
import Input from "./input";
import Button from './button';

const StyledWrapper = styled.div`
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Form = () => (
    <StyledWrapper>
        <Header />
        <Input />
        <Button />
    </StyledWrapper>
)

export default Form;