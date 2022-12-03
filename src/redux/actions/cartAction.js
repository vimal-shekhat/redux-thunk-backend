import fakestoreapi from "../../apis/fakeStoreApi";
import { ActionTypes, CartActionTypes } from "../contants/action-types";

export const getCarts = () => async (dispatch) => {
    const response = await fakestoreapi.get("/products");
    dispatch({ type: ActionTypes.FETCH_PRODUCTS, payload: response.data });
};

export const fetchCartItem = (id) => async (dispatch) => {
    const response = await fakestoreapi.get(`/products/${id}`);
    dispatch({ type: ActionTypes.SELECTED_PRODUCT, payload: response.data });
};

export const AddCarts = (products) => {
    return {
        type: CartActionTypes.ADD_CART,
        payload: products,
    };
};
export const RemoveCarts = (products) => {

    return {

        type: CartActionTypes.REMOVE_PRODUCT_CART,
        payload: products,
    };
};
