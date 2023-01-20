import { push } from '@lagunovsky/redux-react-router'
import { call, put, select, takeEvery } from 'redux-saga/effects'
import { createOrder } from '../../api'
import { OrderDto } from '../../api/types'
import { productsActions } from '../products/reducer'
import { selectUserId } from '../user/selectors'
import { cartActions } from './reducer'
import { selectOrderItems } from './selectors'

function* createOrderSaga() {
  yield put(cartActions.loadingChanged(true))

  try {
    const userId: string = yield select(selectUserId)
    const orderItems: OrderDto['items'] = yield select(selectOrderItems)

    yield call(createOrder, { userId, items: orderItems })

    yield put(cartActions.resetCart())
    yield put(productsActions.fetchProducts())
    yield put(push('/products'))
  } catch (err) {
    console.error(err)
  }
}

export function* cartSaga() {
  yield takeEvery(cartActions.createOrder.toString(), createOrderSaga)
}
