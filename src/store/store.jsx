import { configureStore, combineReducers } from "@reduxjs/toolkit";

import popupReducer from './popupSlice'

const reducers = combineReducers(
    {
        popup: popupReducer
    }
)

export const store = configureStore(
    {
        reducer: reducers
    }
)