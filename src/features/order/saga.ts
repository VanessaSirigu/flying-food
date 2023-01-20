import { call, put, takeEvery } from 'redux-saga/effects'
import { postOrder } from '../../api'
import { ordersAction } from './reducer'

function* sendOrder({ payload }: ReturnType<typeof ordersAction.sendOrder>) {
  // prende i prodotti dal carrello (global state)
  yield put(ordersAction.orderConfirmed(payload))
  yield put(ordersAction.loadingChanged(true))
  // fa la post (asincrona) al server
  yield call(postOrder, payload)
}

export function* ordersSaga() {
  yield takeEvery(ordersAction.sendOrder.toString(), sendOrder)
}
