import rootReducer from "./rootReducer";
import { createReducer } from '@reduxjs/toolkit'

let reducer = rootReducer.reducer

test('contains default inventory', () => {
    const state = reducer(undefined,{})
    expect(state.inventory.length).toBe(6)
    testComponent()
})

