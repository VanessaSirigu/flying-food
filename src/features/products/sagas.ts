import { put, call, takeEvery } from 'redux-saga/effects'
import { getProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { productsAction } from './reducer'

function* fetchProducts(action: ReturnType<typeof productsAction.fetchProducts>) {
  yield put(productsAction.loadingChanged(true))
  const products: ProductDto[] = yield call(getProducts)
  yield put(productsAction.productsLoaded(products))
}

export function* productsSaga() {
  yield takeEvery(productsAction.fetchProducts.toString(), fetchProducts)
}
