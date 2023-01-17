import { configureStore } from '@reduxjs/toolkit'
import { productsReducer, productsSlice } from './products/reducer'

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
