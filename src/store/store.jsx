import { configureStore, combineReducers } from "@reduxjs/toolkit";

import popupReducer from './PopupSlice'

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