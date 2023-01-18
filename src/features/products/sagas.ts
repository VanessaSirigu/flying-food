import { put, call, takeEvery } from 'redux-saga/effects'
import { getProductById, getProducts, getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { productsAction } from './reducer'

function* fetchProducts(action: ReturnType<typeof productsAction.fetchProducts>) {
  yield put(productsAction.loadingChanged(true))
  const products: ProductDto[] = yield call(getProducts)
  yield put(productsAction.productsLoaded(products))
}

function* fetchProductById(action: ReturnType<typeof productsAction.fetchProductById>) {
  yield put(productsAction.loadingChanged(true))
  const product: ProductDto = yield call(getProductById, action.payload)
  yield put(productsAction.currentProductLoaded(product))
}

function* fetchRelatedProducts(
  action: ReturnType<typeof productsAction.fetchRelatedProducts>
) {
  yield put(productsAction.loadingChanged(true))
  const products: ProductDto[] = yield call(getRandomProducts, action.payload)
  yield put(productsAction.relatedProductsLoaded(products))
}

export function* productsSaga() {
  yield takeEvery(productsAction.fetchProducts.toString(), fetchProducts)
  yield takeEvery(productsAction.fetchProductById.toString(), fetchProductById)
  yield takeEvery(productsAction.fetchRelatedProducts.toString(), fetchRelatedProducts)
}
