import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './Reducer/MovieSlice'
import tvReducer from './Reducer/TvSlice'
import personReducer from './Reducer/PersonSlice'

export const Store = configureStore({
  reducer: {
    movie:movieReducer,
    tv :tvReducer,
    person:personReducer
  },
})


