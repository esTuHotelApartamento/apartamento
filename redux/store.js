import combineReducers from "./reducers"
import { createStore, applyMiddleware, compose } from "redux"
import thunk from "redux-thunk"

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function generateStore(initialState) {
  return createStore(combineReducers, initialState, composeEnhancers(applyMiddleware(thunk)))
}

