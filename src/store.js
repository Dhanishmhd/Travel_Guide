import { configureStore } from '@reduxjs/toolkit'
import attractionsReducer from './features/attractions'

export const store = configureStore({
  reducer: {
    attractions: attractionsReducer,
  },
})