import { RootState } from '../store'

export const selectDeliveries = (state: RootState) => state.deliveries.deliveries

export const selectDeliveryId = (state: RootState) =>
  state.deliveries.deliveries.map((item) => item.id)

export const selectDeliveryName = (state: RootState) => {
  const { products, deliveries } = state
}
