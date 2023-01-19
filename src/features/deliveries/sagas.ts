import { call, put, takeEvery } from 'redux-saga/effects'
import { getDeliveries } from '../../api'
import { Delivery } from './model'
import { deliveriesAction } from './reducer'

function* fetchDeliveries(action: ReturnType<typeof deliveriesAction.fetchDeliveries>) {
  yield put(deliveriesAction.loadingChanged(true))
  const deliveries: Delivery[] = yield call(getDeliveries)
  yield put(deliveriesAction.deliveriesLoaded(deliveries))
}

export function* deliveriesSaga() {
  yield takeEvery(deliveriesAction.fetchDeliveries.toString(), fetchDeliveries)
}
