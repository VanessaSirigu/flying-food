import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { CartState, CartProduct } from './model'

const initialState: CartState = {
  products: [],
  loading: false
}

export const cartSlice = createSlice({
  name: 'carts',
  initialState,
  reducers: {
    addOrUpdateCart(state, { payload }: PayloadAction<CartProduct>) {
      const item = state.products.find(({ prod }) => prod.id === payload.prod.id)
      if (item) {
        const diff = item.prod.stock - item.quantity
        item.quantity += payload.quantity <= diff ? payload.quantity : diff
      } else {
        state.products.push(payload)
      }
    },
    removeFromCart(state, { payload }: PayloadAction<string>) {
      state.products = state.products.filter((p) => p.prod.id !== payload)
    }
  }
})

export const cartAction = cartSlice.actions

export const cartReducer = cartSlice.reducer
