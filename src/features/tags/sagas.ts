import { put, call, takeEvery } from 'redux-saga/effects'
import { getTags } from '../../api'
import { TagDto } from '../../api/types'
import { tagsAction } from './reducer'

function* fetchTags(action: ReturnType<typeof tagsAction.fetchTags>) {
  yield put(tagsAction.loadingChanged(true))
  const tags: TagDto[] = yield call(getTags)
  yield put(tagsAction.tagsLoaded(tags))
}

export function* tagsSaga() {
  yield takeEvery(tagsAction.fetchTags.toString(), fetchTags)
}
