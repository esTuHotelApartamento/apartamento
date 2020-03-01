import rootReducer from "./reducers"
import { createStore as reduxCreateStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"

const createStore = () => reduxCreateStore(rootReducer, applyMiddleware(thunk))
export default createStore