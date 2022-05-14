import { combineReducers } from "redux";
import authReducer from "./authReducer";
import cartReducer from './cartReducer'

const rootReducer = combineReducers({
  user: authReducer,
  cartReducer: cartReducer
})

export default rootReducer;