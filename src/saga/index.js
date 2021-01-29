import { call, put, takeEvery, takeLatest } from 'redux-saga/effects';//副作用

import Api from './../apis/home'

function* getGoodsList (action) {
    const a = yield call(Api.getList)
    yield put({ type: 'SET_GOODS_LIST', payload: a })
}

function* rootSaga () {
    yield takeLatest('SAGA_GOODS_LIST', getGoodsList)
}

export default rootSaga