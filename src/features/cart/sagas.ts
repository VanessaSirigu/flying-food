import { call, put, select, takeEvery } from 'redux-saga/effects'
import { createOrder } from '../../api'
import { OrderDto } from '../../api/types'
import { selectUserId } from '../user/selectors'
import { cartActions } from './reducer'
import { selectOrderItems } from './selectors'

function* createOrderSaga() {
  yield put(cartActions.loadingChanged(true))

  const userId: string = yield select(selectUserId)
  const orderItems: OrderDto['items'] = yield select(selectOrderItems)

  yield call(createOrder, { userId, items: orderItems })
}

export function* cartSaga() {
  yield takeEvery(cartActions.createOrder.toString(), createOrderSaga)
}
