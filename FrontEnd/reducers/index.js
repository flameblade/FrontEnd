/** @format */

import { combineReducers } from "redux";
import { HYDRATE } from "next-redux-wrapper";

import user from "./user";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/lib/persistReducer";

const persistConfig = {
  key: "accessToken",
  storage,
};

// (이전상태, 액션) => 다음상태
const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return action.payload;
    default: {
      const combineReducer = combineReducers({
        user,
      });
      return combineReducer(state, action);
    }
  }
};

export default persistReducer(persistConfig, rootReducer);
