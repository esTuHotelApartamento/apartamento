/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Header, Footer } from "../components/moleculas"
import "./layout.css"
import styled, { ThemeProvider } from "styled-components"
import theme from "../config/theming"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import { Provider } from "react-redux"
import generateStore from "../../redux/store"

import Modal from "react-modal"
Modal.setAppElement("#___gatsby")

const LayoutContainer = styled.div``
const MainStyled = styled.main`
  height: 100%;
  width: 80%;
  min-height: 100vh;
  margin: 0 auto;
  margin-top: 80px;
  @media (max-width: 800px) {
    width: 100%;
  }
 `
// let store = ""
// if (typeof window.localStorage.getItem("dataGuardada") !== "string") {
//   store = generateStore()
// } else {
//   let dataParse = JSON.parse(window.localStorage.getItem("dataGuardada"))
//   store = generateStore(dataParse)
// }
let store = generateStore()


const Layout = ({ children }) => {
  return (
    <div >
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      />
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <LayoutContainer>
            <Header />
            <MainStyled>{children}</MainStyled>
            <Footer />
          </LayoutContainer>
          <ToastContainer position={"bottom-right"} />
        </ThemeProvider>
      </Provider>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
