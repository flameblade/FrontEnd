/** @format */

import { all, fork } from "redux-saga/effects";
import axios from "axios";

import userSaga from "./user";

// axios.defaults.headers.common["Authorization"] = `Bearer`;

axios.defaults.baseURL = "http://localhost:8080";
axios.defaults.withCredentials = true;

export default function* rootSaga() {
  yield all([fork(userSaga)]);
}
