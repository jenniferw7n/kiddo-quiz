import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    quizType: 'addition',
    level: 1,
    score: 0,
};

const quizSlice = createSlice({
    name: 'quiz',
    initialState,
    reducers: {
       addOneScore: (state) =>{
            state.score = state.score+1;
       },
       updateScore: (state, action) =>{
        state.score = action.payload;
        },
       resetScore: (state) =>{
            state.score = 0;
       },
    }
});

export const {addOneScore, updateScore, resetScore}  = quizSlice.actions;

export default quizSlice.reducer;

