import { configureStore } from "@reduxjs/toolkit";
import alpineReducer from './slice';

export const store = configureStore({
    reducer: {
        alpine: alpineReducer
    }
});