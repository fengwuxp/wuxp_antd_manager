// import React, {Component} from 'react'
// import ReactDOM from 'react-dom'
// import {createStore, combineReducers, applyMiddleware} from 'redux'
// import {Provider, connect} from 'react-redux'
// import createHistory from 'history/createBrowserHistory'
// import {Route} from 'react-router'
// import {ConnectedRouter, routerReducer, routerMiddleware, push} from 'react-router-redux'
// import createSagaMiddleware, {takeEvery} from 'redux-saga'
// import {put, fork} from 'redux-saga/effects'
//
// function reducers(state = 1, action) {
//     switch (action.type) {
//         case 'Done':
//             return state + action.payload;
//         default:
//             return state;
//     }
// };
// const history = createHistory()
// const routeMiddleware = routerMiddleware(history);
//
// export function* AddAsync() {
//     yield new Promise(function (resolve) {
//         setTimeout(function () {
//             resolve()
//         }, 1000)
//     })
//
//     yield put({type: 'Done', payload: 1})
//
// }
//
// function* watchIncrementAsync() {
//
//     yield* takeEvery('ADD', AddAsync)
// }
//
// let sagaMiddleware = createSagaMiddleware();
//
// const store = createStore(
//     combineReducers({
//         reducers,
//         router: routerReducer
//     }),
//     applyMiddleware(routeMiddleware, sagaMiddleware)
// )
// sagaMiddleware.run(watchIncrementAsync)
//
// let Home = () => <div onClick={() => store.dispatch(push('/cal'))}>Home 点我跳转的计算页面
// </div>
// let Cal = () => <div onClick={() => {
//     store.dispatch({
//         type: 'ADD',
//         payload: 1
//     })
// }
// }>点我加1</div>
//
//
// let ShowDataIn = (props) => <div>{props.value}</div>;
// // 由于使用了combineReducers  这里多了一层
// let ShowData = connect(({reducers: state}) => {
//     return {value: state}
// })(ShowDataIn);
//
//
// ReactDOM.render(
//     <Provider store={store}>
//         {/* ConnectedRouter will use the store from Provider automatically */}
//         <ConnectedRouter history={history}>
//             <div>
//                 <Route exact path="/" component={Home}/>
//                 <Route path="/Cal" component={Cal}/>
//
//                 <ShowData/>
//             </div>
//         </ConnectedRouter>
//
//
//     </Provider>,
//     document.getElementById('root')
// )
