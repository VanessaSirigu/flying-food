import type { RootState } from '../store'

export const selectProducts = (state: RootState) => state.products.products

export const selectFilteredProducts = (state: RootState) => {}
