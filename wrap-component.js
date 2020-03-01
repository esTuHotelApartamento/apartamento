import React from "react"
import { Provider } from "react-redux"

import createStore from "./redux/store"
import theme from "./src/config/theming"
import { ThemeProvider } from "styled-components"

// eslint-disable-next-line react/display-name,react/prop-types
export default ({ element }) => {
  // Instantiating store in `wrapRootElement` handler ensures:
  //  - there is fresh store for each SSR page
  //  - it will be called only once in browser, when React mounts
  const store = createStore()
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>{element}</ThemeProvider>
    </Provider>
  )
}
