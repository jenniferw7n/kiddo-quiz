import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import api from '@/api';
import { shuffleArray } from '@/lib/utils/shuffleArray';

const initialState = {
    questions: undefined,
    passedQuestionIds: [],
    wrongQuestions: [],
    status: 'idle',
    error: null,
};

const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
      addPassedQuestionId: (state, action) => {
        state.passedQuestionIds.push(action.payload);
      },
      removePassedQuestionId: (state, action) => {
        state.passedQuestionIds =  state.passedQuestionIds.filter(
          (id) => id !== action.payload,
        );
      },
      resetPassedQuestionIds: (state) => {
        state.passedQuestionIds = [];
      },
      addWrongQuestion: (state, action) => {
        state.wrongQuestions.push(action.payload);
      },
      removeWrongQuestion: (state, action) => {
        state.wrongQuestions =  state.wrongQuestions.filter(
          (question) => question.question !== action.payload.question,
        );
      },
      resetWrongQuestions: (state) => {
        state.wrongQuestions = [];
      },
      fetchWrongQuestions: (state) => {
        let newQuestions = [];
        state.wrongQuestions.forEach((question)=>{
          let newQuestion = question;
          //shuffle the options
          newQuestion.options = shuffleArray(question.options);
          newQuestions.push(newQuestion);
        })
        state.questions = newQuestions;
      },
    },
    extraReducers(builder) {
        builder
      .addCase(fetchQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchQuestions.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.questions = action.payload;
      })
      .addCase(fetchQuestions.rejected, (state, action) => {
        const message = action.error.message;

        if (message !== 'Aborted') {
          state.status = 'failed';
          state.error = message;
        }
      });
  },
});

export const fetchQuestions = createAsyncThunk(
    'questions/fetchQuestions',
    async (options) => {
      const response = await api.get('/api/questions', options);
      return response.data;
    },
  );

export const {addPassedQuestionId, removePassedQuestionId, resetPassedQuestionIds,
  addWrongQuestion, removeWrongQuestion, resetWrongQuestions, fetchWrongQuestions}  = questionsSlice.actions;

export default questionsSlice.reducer;