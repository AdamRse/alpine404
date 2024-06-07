import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    //valeurs
}

export const alpineSlice = createSlice({
    name: "alpine",
    initialState,
    reducers: {
        // newReducer(state, action) {
        //     state.actionFree = action.payload;
        // }
    },
});

//export const { newSlice } = alpineSlice.actions;
export default alpineSlice.reducer;  