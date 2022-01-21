/** @format */
import { useEffect } from "react";
import produce from "immer";
import { config } from "dotenv";
import axios from "axios";

import { persistStore, persistReducer } from "redux-persist";
import rootReducer from "../reducers/";
import storage from "redux-persist/lib/storage";

export const initialState = {
  logInLoading: false, // 로그인 시도중
  logInDone: false,
  logInError: null,
  logOutLoading: false, // 로그아웃 시도중
  logOutDone: false,
  logOutError: null,
  signUpLoading: false, // 회원가입 시도중
  signUpDone: false,
  signUpError: null,
  loadMyInfoLoading: false, // 새로 고침 중
  loadMyInfoDone: false,
  loadMyInfoError: null,
  me: null,
};

export const LOG_IN_REQUEST = "LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_FAILURE = "LOG_IN_FAILURE";

export const LOG_OUT_REQUEST = "LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_FAILURE = "LOG_OUT_FAILURE";

export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

export const LOAD_MY_INFO_REQUEST = "LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_FAILURE = "LOAD_MY_INFO_FAILURE";

export const ADD_POST_TO_ME = "ADD_POST_TO_ME";
export const REMOVE_POST_OF_ME = "REMOVE_POST_OF_ME";

// eslint-disable-next-line arrow-body-style
export const loginRequestAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

// eslint-disable-next-line arrow-body-style
export const logoutRequestAction = () => {
  return {
    type: LOG_OUT_REQUEST,
  };
};

export const loginAction = (data) => {
  return {
    type: LOG_IN_REQUEST,
    data,
  };
};

export const logoutAction = () => {
  return {
    type: "LOG_OUT",
  };
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    // case 'CHANGE_NICKNAME':
    //   return {
    //     ...state,
    //     name: action.data,
    //   };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInError: null,
        logInDone: false,
        logInLoading: true,
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInError: null,
        logInDone: true,
        logInLoading: false,
        me: {
          username: action.data.username,
          role: action.data.role,
        },
      };

    case LOG_IN_FAILURE:
      return {
        ...state,
        logInError: action.error,
        logInLoading: false,
      };

    case SIGNUP_REQUEST:
      return {
        ...state,
        signUpError: null,
        signUpDone: false,
        signUpLoading: true,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signUpError: null,
        signUpDone: true,
        signUpLoading: false,
        me: {
          id: action.data.id,
          username: action.data.username,
          nickname: action.data.nickname,
          revisit: action.data.revisit,
          status: action.data.status,
          role: action.data.role,
          JoinTime: action.data.JoinDate,
          ActiveTime: action.data.ActiveTime,
        },
      };

    case SIGNUP_FAILURE:
      return {
        ...state,
        signUpError: action.error,
        signUpLoading: false,
      };

    case LOAD_MY_INFO_REQUEST:
      return {
        ...state,
        loadMyInfoError: null,
        loadMyInfoDone: false,
        loadMyInfoLoading: true,
      };
    case LOAD_MY_INFO_SUCCESS:
      return {
        ...state,
        loadMyInfoError: null,
        loadMyInfoDone: true,
        loadMyInfoLoading: false,
        me: action.data,
      };

    case LOAD_MY_INFO_FAILURE:
      return {
        ...state,
        loadMyInfoError: action.error,
        loadMyInfoLoading: false,
      };

    default:
      return state;
  }
};

export default reducer;
