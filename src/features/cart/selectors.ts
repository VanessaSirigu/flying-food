import type { RootState } from '../store'

export const selectCartProducts = (state: RootState) => state.carts.products

export const selectNumberOfProducts = (state: RootState) => state.carts.products.length
