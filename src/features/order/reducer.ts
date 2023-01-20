import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Order, OrderState } from './model'

const initialState: OrderState = {
  orders: [],
  loading: true
}

export const ordersSlice = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    loadingChanged(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    orderConfirmed(state, { payload }: PayloadAction<Order>) {
      state.orders.push(payload)
    }
  }
})

export const ordersAction = {
  ...ordersSlice.actions,
  sendOrder: createAction<Order>('orders/sendOrder')
}

export const ordersReducer = ordersSlice.reducer
