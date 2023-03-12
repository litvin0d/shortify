import { configureStore } from "@reduxjs/toolkit";

import inputTextReducer from "./inputTextSlice";
import resultReducer from "./resultSlice";

export const store = configureStore({
    reducer: {
        inputText: inputTextReducer,
        result: resultReducer,
    },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch