import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './slides/counterSlide' // ✅ Dùng default import

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})
