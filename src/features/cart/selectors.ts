import { createSelector } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export const selectCartState = (state: RootState) => state.carts

export const selectCartProducts = createSelector(selectCartState, (cart) => cart.products)

export const selectNumberOfProducts = createSelector(
  selectCartProducts,
  (products) => products.length
)

export const selectOrderItems = createSelector(selectCartProducts, (cartProducts) => {
  return cartProducts.map(({ prod, quantity }) => ({
    id: prod.id,
    quantity
  }))
})

export const makeSelectCartQuantity = (id: string) =>
  createSelector(selectCartProducts, (cartProducts) => {
    const pr = cartProducts.find(({ prod }) => prod.id === id)
    return pr?.quantity
  })
