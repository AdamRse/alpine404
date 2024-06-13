import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    selection: {
        model:false
    }
}

export const alpineSlice = createSlice({
    name: "alpine",
    initialState,
    reducers: {
        changeSelection(state, action){// payload : {section: "nomSection", value:"valeur"}
            state.selection[action.payload.section] = action.payload.value
        }
    },
});

export const { changeSelection } = alpineSlice.actions;
export default alpineSlice.reducer;  