import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectCartState = (state: RootState) => state.carts

export const selectCartProducts = createSelector(selectCartState, (cart) => cart.products)

export const selectNumberOfProducts = createSelector(
  selectCartProducts,
  (products) => products.length
)
