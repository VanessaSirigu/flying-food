import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { ProductsState } from './model'

const initialState: ProductsState = {
  products: [],
  currentProduct: null,
  relatedProducts: [],
  loading: false
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    }
  }
})

export const productsAction = productsSlice.actions

export const productsReducer = productsSlice.reducer
