/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it
// import React from "react"
// import Layout from "./src/layouts"
// import { ThemeProvider } from "styled-components"

// export const wrapRootElement = ({ element, ...props }) => {
//   return (
//         <Layout {...props}>{element}</Layout>
//   )
// }

import wrapWithProvider from "./wrap-component"
export const wrapRootElement = wrapWithProvider