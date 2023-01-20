import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { cartReducer, cartSlice } from './cart/reducer'
import { deliveriesReducer, deliveriesSlice } from './deliveries/reducer'
import { deliveriesSaga } from './deliveries/sagas'
import { ordersReducer, ordersSlice } from './order/reducer'
import { ordersSaga } from './order/saga'
import { productsReducer, productsSlice } from './products/reducer'
import { productsSaga } from './products/sagas'
import { tagsReducer, tagsSlice } from './tags/reducer'
import { tagsSaga } from './tags/sagas'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
  yield all([productsSaga(), tagsSaga(), deliveriesSaga(), ordersSaga()])
}

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [tagsSlice.name]: tagsReducer,
    [cartSlice.name]: cartReducer,
    [deliveriesSlice.name]: deliveriesReducer,
    [ordersSlice.name]: ordersReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
