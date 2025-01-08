import { createSlice } from "@reduxjs/toolkit";

const PopupSlice = createSlice(
    {
        name: 'popup',

        initialState: {
            type: '',
            active: false,
        },

        reducers: {
            activateReducer(state, action) {
                state.active ? state.active = false : state.active = true
                if (state.active) {
                    state.type = action.payload
                }
            },
            
        }
    }
)

export const { activateReducer } = PopupSlice.actions

export default PopupSlice.reducer