import { createSelector } from '@reduxjs/toolkit'
import { RootState } from '../store'

export const selectDeliveriesState = (state: RootState) => state.deliveries

export const selectDeliveries = createSelector(
  selectDeliveriesState,
  (deliveries) => deliveries.deliveries
)

export const makeSelectDeliveryById = (id: string) =>
  createSelector(
    selectDeliveries,
    (deliveries) => deliveries.find((d) => d.id === id)?.name || ''
  )

// export const selectDeliveryName = (state: RootState, id: string) => {
//   state.deliveries
// }
