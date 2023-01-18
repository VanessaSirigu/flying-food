import type { RootState } from '../store'

export const selectCartProducts = (state: RootState) => state.carts.products
