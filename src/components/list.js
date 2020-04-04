import React, { Component } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.ul`
    list-style: none;
    grid-row-start: 2;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 0;
    margin: 3%;
    font-size: 3rem;
`

const List = () => (
    <StyledWrapper>
        <li>this is an examplary list item</li>
        <li>this is an examplary list item</li>
        <li>this is an examplary list item</li>
        <li>this is an examplary list item</li>
        <li>this is an examplary list item</li>
        <li>this is an examplary list item</li>
    </StyledWrapper>
)

export default List;