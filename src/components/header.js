import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const StyledHeading1 = styled.h1`
  margin: 2rem 0 3rem 0;
  font-size: 6rem;
  letter-spacing: .3rem;
`

const StyledSmallerHeading = styled.div`
  font-size: 3rem;
  letter-spacing: .2rem;
  margin: 0;
`

const Header = () => (
  <StyledHeader>
      <StyledHeading1>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
            display: `flex`,
            flexDirection: `column`,
            alignItems: `center`,
            justifyContent: `center`,
            lineHeight: `1`
          }}
        >
          <StyledSmallerHeading>wirtualny</StyledSmallerHeading>
          <div>słoik sukcesów</div>
        </Link>
      </StyledHeading1>
  </StyledHeader>
)

export default Header
