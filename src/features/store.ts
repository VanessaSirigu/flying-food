import { configureStore } from '@reduxjs/toolkit'
import { productsReducer, productsSlice } from './products/reducer'
import { tagsReducer, tagsSlice } from './tags/reducer'

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [tagsSlice.name]: tagsReducer
  },
  devTools: process.env.NODE_ENV !== 'production'
})

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
