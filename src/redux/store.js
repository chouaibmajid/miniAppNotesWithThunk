import { applyMiddleware, createStore } from "redux";
// import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
// import reducer from "./reducer";
// import { getFilmSaga } from "./appSaga";
import { rootReducer } from "./rootReducer";
import thunk from "redux-thunk";

// const sagaMiddleware = createSagaMiddleware();

// const mids = [logger, sagaMiddleware];

// export const store = createStore(rootReducer, applyMiddleware(...mids));
// sagaMiddleware.run(getFilmSaga);

const middleware = [thunk];

if (process.env.NODE_ENV === "development") {
  middleware.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middleware));