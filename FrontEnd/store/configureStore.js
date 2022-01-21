import { createWrapper } from "next-redux-wrapper";
import { compose, createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import { persistStore, persistReducer } from "redux-persist";
import createSagaMiddleware from "redux-saga";

import reducer from "../reducers";
import rootSaga from "../sagas";

const configureStore = (context) => {
  console.log(context);
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  // eslint-disable-next-line operator-linebreak
  const enhancer =
    process.env.NODE_ENV === "proction"
      ? compose(applyMiddleware(...middlewares))
      : composeWithDevTools(applyMiddleware(...middlewares, logger));
  const store = createStore(reducer, enhancer);

  store.sagaTask = sagaMiddleware.run(rootSaga);
  return store;
};

const makeStore = () => {
  const isServer = typeof window === "undefined";

  if (isServer) {
    return makeConfiguredStore(reducer);
  } else {
    const store = makeConfiguredStore(persistReducer);
    let persistor = persistStore(store);
    return { persistor, ...store };
  }
};

const wrapper = createWrapper(configureStore, makeStore, {
  debug: process.env.NODE_ENV === "development",
});

export default wrapper;
