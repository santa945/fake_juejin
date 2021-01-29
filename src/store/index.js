import { createStore, applyMiddleware } from 'redux'
import reducers from './reducers'
// import { composeWithDevTools } from 'redux-devtools-extension'

import createSagaMiddleware from 'redux-saga'
import rootSaga from '../saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)//只能放一个中间件
)

sagaMiddleware.run(rootSaga)
export default store