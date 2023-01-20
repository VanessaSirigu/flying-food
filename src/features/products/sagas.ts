import { put, call, takeEvery } from 'redux-saga/effects'
import { getProductById, getProducts, getRandomProducts } from '../../api'
import { ProductDto } from '../../api/types'
import { productsActions } from './reducer'

function* fetchProducts(action: ReturnType<typeof productsActions.fetchProducts>) {
  yield put(productsActions.loadingChanged(true))
  const products: ProductDto[] = yield call(getProducts)
  yield put(productsActions.productsLoaded(products))
}

function* fetchProductById(action: ReturnType<typeof productsActions.fetchProductById>) {
  yield put(productsActions.loadingChanged(true))
  const product: ProductDto = yield call(getProductById, action.payload)
  yield put(productsActions.currentProductLoaded(product))
}

function* fetchRelatedProducts(
  action: ReturnType<typeof productsActions.fetchRelatedProducts>
) {
  yield put(productsActions.loadingChanged(true))
  const products: ProductDto[] = yield call(getRandomProducts, action.payload)
  yield put(productsActions.relatedProductsLoaded(products))
}

export function* productsSaga() {
  yield takeEvery(productsActions.fetchProducts.toString(), fetchProducts)
  yield takeEvery(productsActions.fetchProductById.toString(), fetchProductById)
  yield takeEvery(productsActions.fetchRelatedProducts.toString(), fetchRelatedProducts)
}
