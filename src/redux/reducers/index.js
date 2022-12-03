import { combineReducers } from "redux";
import { productReducer, selectedProductReducer } from "./productReducer";
import { cartReducer } from "./CartReducer";

const reducers = combineReducers({
  allProducts: productReducer,
  product: selectedProductReducer,
  carts: cartReducer,
});

export default reducers;
