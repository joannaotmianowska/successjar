import React from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.ul`
    grid-row-start: 2;
    list-style: none;
    background: ${({ theme }) => theme.colors.backgroundPrimary};
    border-radius: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem;
    font-size: 4rem;
    justify-self: center;
    width: 90%;

    @media (min-width: 426px) {
        max-width: 40rem;
    }
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