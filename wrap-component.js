import React from "react"
import { Provider } from "react-redux"

import createStore from "./redux/store"
import theme from "./src/config/theming"
import { ThemeProvider } from "styled-components"
import Layout from "./src/layouts"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element, ...props }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <Layout {...props}>
        <ThemeProvider theme={theme}>{element}</ThemeProvider>
      </Layout>
    </Provider>
  )
}
