import React from "react"
import styled, { createGlobalStyle, ThemeProvider }  from "styled-components"
import { theme } from "../utils/theme"
import PropTypes from "prop-types"

const GlobalStyle = createGlobalStyle`
    html {
      font-size: 10px;
    }

    body {
      padding: 0;
      margin: 0;
      font-family: ${({ theme }) => theme.fontFamily.main};
      font-size: 1rem;
      background: ${({ theme }) => theme.colors.white};
    }

    *,
    *::before,
    *::after {
        box-sizing: border-box;
  }
`

const StyledWrapper = styled.div`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
  background: ${({ theme }) => theme.colors.backgroundPrimary};
`

const Layout = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      <StyledWrapper>{children}</StyledWrapper>
    </>
  </ThemeProvider>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
