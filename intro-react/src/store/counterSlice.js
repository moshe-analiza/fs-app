import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        inc: (state, {payload}) => {
            state.value++;
        },
        dec: (state) => {
            state.value--;
        }
    }
});

export const { dec, inc } = counterSlice.actions;
export default counterSlice.reducer;
