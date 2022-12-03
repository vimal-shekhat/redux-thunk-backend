import { CartActionTypes } from "../contants/action-types";


const initialCartState = {
    carts: [],
};
export const cartReducer = (state = initialCartState, { type, payload }) => {

    switch (type) {
        case CartActionTypes.ADD_CART:

            const itemInCart = state.carts?.find((item) => item.id === payload.id);
            if (itemInCart) {
                const itemInCartlist = state.carts?.filter((item) => {
                    if (item.id === payload.id) {
                        return item.quantity++
                    }
                    return item
                });
                // itemInCart.quantity++;
                return { ...state, carts: itemInCartlist }
            } else {
                let data = payload
                data.quantity = 1
                return { ...state, carts: [...state.carts, data] }

            }


        case CartActionTypes.REMOVE_PRODUCT_CART:
            const itemCart = state.carts?.find((item) => item.id === payload);

            if (itemCart?.quantity > 1) {
                const itemInCartlist = state.carts?.filter((item) => {
                    if (item.id === payload) {
                        return item.quantity--;
                    }
                    return item
                });

                return { ...state, carts: itemInCartlist }

            } else {
                const itemInCartlist = state.carts?.filter((item) => item.id !== payload)
                return { ...state, carts: itemInCartlist }

            };

        default:
            return state;
    }
};