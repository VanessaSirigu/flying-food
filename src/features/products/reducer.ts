import { createAction, createSlice } from '@reduxjs/toolkit'
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
      state.loading = false
    },
    relatedProductsLoaded(state, action: PayloadAction<Product[]>) {
      state.relatedProducts = action.payload
      state.loading = false
    },
    currentProductLoaded(state, action: PayloadAction<Product>) {
      state.currentProduct = action.payload
      state.loading = false
    },
    resetCurrentProduct(state) {
      state.currentProduct = initialState.currentProduct
    },
    resetRelatedProduct(state) {
      state.relatedProducts = initialState.relatedProducts
    }
  }
})

export const productsAction = {
  ...productsSlice.actions,
  fetchProducts: createAction('products/fetchProducts'),
  fetchProductById: createAction<string>('products/fetchProductById'),
  fetchRelatedProducts: createAction<string | undefined>('products/fetchRelatedProducts')
}

export const productsReducer = productsSlice.reducer
