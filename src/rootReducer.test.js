import rootReducer from "./rootReducer";
import data from "./data.json";

const INITIAL_STATE = { inventory: data.products, cart: [] };

test('contains default inventory', () => {
    const state = rootReducer(INITIAL_STATE,{})
    expect(state.inventory.length).toBe(6)
    testComponent()
})

