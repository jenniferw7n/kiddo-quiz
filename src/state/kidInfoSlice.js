import { createSlice } from '@reduxjs/toolkit';

const initialState = null;
// const initialState = {
//     name: undefined,
//     grade: undefined,
//     type: undefined,
//     level: undefined,
//     numOfQuestions: undefined
// };

const kidInfoSlice = createSlice({
    name: 'kidInfo',
    initialState: initialState,
    reducers: {
        updateKidInfo: (state, action) =>{
             return {...state, ...action.payload}
        },
    }
});

export const {updateKidInfo} = kidInfoSlice.actions;

export default kidInfoSlice.reducer;