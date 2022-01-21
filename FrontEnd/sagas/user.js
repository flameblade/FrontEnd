/** @format */

import { all, call, delay, fork, put, takeLatest } from "redux-saga/effects";
import axios from "axios";

import {
  LOG_IN_FAILURE,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_FAILURE,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_MY_INFO_FAILURE,
} from "../reducers/user";

function logInAPI(data) {
  console.log("19번째 줄");
  return axios.post("/login", data);
}

function* logIn(action) {
  try {
    console.log("saga logIn");
    const result = yield call(logInAPI, action.data);

    const accessToken = result.data.access_token;
    const refreshToken = result.data.refresh_token;

    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    console.log(JSON.stringify(result.data));
    yield put({
      type: LOG_IN_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOG_IN_FAILURE,
      error: err.response.data,
    });
  }
}

function loadMyInfoAPI() {
  console.log("19번째 줄");
  return axios.get(`/token/refresh`, {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("accessToken"),
      RefreshToken: localStorage.getItem("refreshToken"),
    },
  });
}

function* loadMyInfo(action) {
  try {
    console.log("saga logIn");
    const result = yield call(loadMyInfoAPI, action.data);
    const accessToken = result.data.access_token;

    localStorage.setItem("accessToken", accessToken);

    console.log(JSON.stringify(result.data));
    yield put({
      type: LOAD_MY_INFO_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    yield put({
      type: LOAD_MY_INFO_FAILURE,
      error: err.response.data,
    });
  }
}

function logOutAPI() {
  return axios.post("/user/logout");
}
function* logOut() {
  try {
    yield call(logOutAPI);
    yield delay(1000);
    localStorage.removeItem("connect.sid");
    yield put({
      type: LOG_OUT_SUCCESS,
    });
  } catch (err) {
    yield put({
      type: LOG_OUT_FAILURE,
    });
  }
}

function SignUpAPI(data) {
  return axios.post("/join", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
}

function* SignUp(action) {
  try {
    console.log("saga SignUp");
    const result = yield call(SignUpAPI, action.data);

    console.log(result);
    yield put({
      type: SIGNUP_SUCCESS,
      data: result.data,
    });
  } catch (err) {
    console.log(err);
    yield put({
      type: SIGNUP_FAILURE,
      error: err.response.data,
    });
  }
}

function* watchLogIn() {
  yield takeLatest(LOG_IN_REQUEST, logIn);
}
function* watchLoadMyInfo() {
  yield takeLatest(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

function* watchLogOut() {
  yield takeLatest(LOG_OUT_REQUEST, logOut);
}

function* watchSignUp() {
  yield takeLatest(SIGNUP_REQUEST, SignUp);
}

export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchLogOut),
    fork(watchSignUp),
    fork(watchLoadMyInfo),
  ]);
}
