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
    text-align: center;
    margin: 1rem;

    @media (min-width: 426px) {
        max-width: 40rem;
    }
`

const List = ({ items }) => (
    <StyledWrapper>
        { items.length === 0
            ? <li>Dodaj swoje sukcesy przez formularz u góry</li>
            : items.map(item =>
                (<li key={Math.random()}>{item}</li>))
        }
    </StyledWrapper>
);

export default List;