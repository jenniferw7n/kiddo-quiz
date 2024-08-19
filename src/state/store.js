import { configureStore } from '@reduxjs/toolkit';

import quizReducer from './quiz/quizSlice';
import questionsReducer from './quiz/questionsSlice';

export const store = configureStore({
    reducer: {
      quiz: quizReducer,
      questions: questionsReducer,
    },
  });