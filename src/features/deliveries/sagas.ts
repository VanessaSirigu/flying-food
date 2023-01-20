import { call, put, takeEvery } from 'redux-saga/effects'
import { getDeliveries } from '../../api'
import { Delivery } from './model'
import { deliveriesActions } from './reducer'

function* fetchDeliveries(action: ReturnType<typeof deliveriesActions.fetchDeliveries>) {
  yield put(deliveriesActions.loadingChanged(true))
  const deliveries: Delivery[] = yield call(getDeliveries)
  yield put(deliveriesActions.deliveriesLoaded(deliveries))
}

export function* deliveriesSaga() {
  yield takeEvery(deliveriesActions.fetchDeliveries.toString(), fetchDeliveries)
}
