import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface resultState {
    value: string;
}

const initialState: resultState = {
    value: "",
};

export const resultSlice = createSlice({
    name: "result",
    initialState,
    reducers: {
        setResult: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setResult } = resultSlice.actions;
export default resultSlice.reducer;