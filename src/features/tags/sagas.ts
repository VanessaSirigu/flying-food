import { put, call, takeEvery } from 'redux-saga/effects'
import { getTags } from '../../api'
import { TagDto } from '../../api/types'
import { tagsActions } from './reducer'

function* fetchTags(action: ReturnType<typeof tagsActions.fetchTags>) {
  yield put(tagsActions.loadingChanged(true))
  const tags: TagDto[] = yield call(getTags)
  yield put(tagsActions.tagsLoaded(tags))
}

export function* tagsSaga() {
  yield takeEvery(tagsActions.fetchTags.toString(), fetchTags)
}
