import data from "./data.json";

const INITIAL_STATE = { inventory: data.products, cart: [] };

export default function rootReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case "ADD":
            const newId = action.id;
            return { ...state, cart: [...state.cart, {[newId]: state.inventory[newId]}] };
        case "DELETE":
            let doOnce = true;
            function filterOnce(product) {
                if (Object.keys(product)[0] === action.id && doOnce) {
                    doOnce = false;
                    return false;
                }
                return true;
            }
            return { ...state, cart: state.cart.filter(filterOnce)};
        default:
            return state;
    }
}