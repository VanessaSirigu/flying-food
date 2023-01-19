import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Delivery, DeliveryState } from './model'

const initialState: DeliveryState = {
  deliveries: [],
  loading: false
}

export const deliveriesSlice = createSlice({
  name: 'deliveries',
  initialState,
  reducers: {
    loadingChanged(state, action: PayloadAction<boolean>) {
      state.loading = action.payload
    },
    deliveriesLoaded(state, action: PayloadAction<Delivery[]>) {
      state.deliveries = action.payload
    }
  }
})

export const deliveriesAction = {
  ...deliveriesSlice.actions,
  fetchDeliveries: createAction('deliveries/fetchDeliveries')
}

export const deliveriesReducer = deliveriesSlice.reducer
