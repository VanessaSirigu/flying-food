import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Product, ProductsState } from './model'

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
    loadingChanged(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    productsLoaded(state, action: PayloadAction<Product[]>) {
      state.products = action.payload
    },
    relatedProductsLoaded(state, action: PayloadAction<Product[]>) {
      state.relatedProducts = action.payload
    },
    currentProductLoaded(state, action: PayloadAction<Product>) {
      state.currentProduct = action.payload
    }
  }
})

export const productsAction = productsSlice.actions

export const productsReducer = productsSlice.reducer
