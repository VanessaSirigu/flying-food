import {
  createRouterMiddleware,
  createRouterReducer
} from '@lagunovsky/redux-react-router'
import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { history } from '../Utils/history'
import { cartReducer, cartSlice } from './cart/reducer'
import { cartSaga } from './cart/sagas'
import { deliveriesReducer, deliveriesSlice } from './deliveries/reducer'
import { deliveriesSaga } from './deliveries/sagas'
import { ordersReducer, ordersSlice } from './orders/reducer'
import { ordersSaga } from './orders/sagas'
import { productsReducer, productsSlice } from './products/reducer'
import { productsSaga } from './products/sagas'
import { tagsReducer, tagsSlice } from './tags/reducer'
import { tagsSaga } from './tags/sagas'
import { userReducer, userSlice } from './user/reducer'

const sagaMiddleware = createSagaMiddleware()
const routerMiddleware = createRouterMiddleware(history)

function* rootSaga() {
  yield all([productsSaga(), tagsSaga(), deliveriesSaga(), cartSaga(), ordersSaga()])
}

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [tagsSlice.name]: tagsReducer,
    [cartSlice.name]: cartReducer,
    [deliveriesSlice.name]: deliveriesReducer,
    [ordersSlice.name]: ordersReducer,
    [userSlice.name]: userReducer,
    router: createRouterReducer(history)
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([routerMiddleware, sagaMiddleware])
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
