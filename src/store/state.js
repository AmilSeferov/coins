import { configureStore } from '@reduxjs/toolkit'
import  fetchReducer  from './../reducers/reducer'
export const store = configureStore({
  reducer: {
    coinslist: fetchReducer,
  },
})