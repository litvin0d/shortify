import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface inputTextState {
    value: string;
}

const initialState: inputTextState = {
    value: "",
};

export const inputTextSlice = createSlice({
    name: "inputText",
    initialState,
    reducers: {
        setInputText: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        },
    },
});

export const { setInputText } = inputTextSlice.actions;
export default inputTextSlice.reducer;