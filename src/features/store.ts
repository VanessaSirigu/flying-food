import createSagaMiddleware from '@redux-saga/core'
import { configureStore } from '@reduxjs/toolkit'
import { all } from 'redux-saga/effects'
import { productsReducer, productsSlice } from './products/reducer'
import { productsSaga } from './products/sagas'
import { tagsReducer, tagsSlice } from './tags/reducer'

const sagaMiddleware = createSagaMiddleware()

function* rootSaga() {
  yield all([productsSaga()])
}

export const store = configureStore({
  reducer: {
    [productsSlice.name]: productsReducer,
    [tagsSlice.name]: tagsReducer
  },
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware)
})

sagaMiddleware.run(rootSaga)

export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch
