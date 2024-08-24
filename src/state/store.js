import { configureStore } from '@reduxjs/toolkit';

import quizReducer from './quiz/quizSlice';
import questionsReducer from './quiz/questionsSlice';
import kidInfoReducer from './kidInfoSlice';

export const store = configureStore({
    reducer: {
      kidInfo: kidInfoReducer,
      quiz: quizReducer,
      questions: questionsReducer,
    },
  });