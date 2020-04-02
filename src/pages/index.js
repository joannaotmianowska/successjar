import React from "react"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"


const StyledH = styled.div`
  color: red;
`

const IndexPage = () => (
  <Layout>
    <SEO title="Success Jar" />
    <StyledH>Welcome to Success Jar!</StyledH>
  </Layout>
)

export default IndexPage
