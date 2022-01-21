import React, { useCallback, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Router from "next/router";
import axios from "axios";
import { END } from "redux-saga";
import { LOAD_MY_INFO_REQUEST, SIGNUP_REQUEST } from "../reducers/user";

import Navbar from "../components/Navbar";

const SignUp = () => {
  const dispatch = useDispatch();
  const { signUpLoading, signUpDone, signUpError, me } = useSelector(
    (state) => state.user
  );

  useEffect(() => {
    if (signUpDone) {
      Router.replace("/");
    }
  }, [signUpDone]);

  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);

  const [username, setUsername] = useState("");
  const [nickname, setNickname] = useState("");
  const [password, setPassword] = useState("");

  const [passwordCheck, setPasswordCheck] = useState("");
  const [passwordError, setPasswordError] = useState(false);

  const onUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [username]
  );

  const onNickname = useCallback(
    (e) => {
      setNickname(e.target.value);
    },
    [nickname]
  );

  const onPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onChangePasswordCheck = useCallback(
    (e) => {
      setPasswordCheck(e.target.value);
      setPasswordError(e.target.value !== password);
    },
    [password]
  );

  const [term, setTerm] = useState("");
  const [termError, setTermError] = useState(false);
  const onChangeTerm = useCallback((e) => {
    setTerm(e.target.checked);
    setTermError(false);
  }, []);

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      if (password !== passwordCheck) {
        return setPasswordError(true);
      }
      if (!term) {
        return setTermError(true);
      }

      dispatch({
        type: SIGNUP_REQUEST,
        data: { username, password, nickname },
      });
    },
    [username, nickname, password, passwordCheck, term]
  );

  const hasError = (passwordEntered) => (password.length < 5 ? true : false);
  const onReset = () => {
    setEmail("");
    setNickname("");
    setPassword("");
    setPasswordCheck("");
  };

  return (
    <Navbar>
      <div class="Welcome_User">
        <div class="card-body">
          <font size="5" style={{ color: "white", marginBottom: "5px" }}>
            회원가입
          </font>
          <form method="post" onSubmit={onSubmit}>
            <ul>
              <li>
                {" "}
                아이디 :{" "}
                <input
                  type="text"
                  name="username"
                  label="ID"
                  onChange={onUsername}
                />{" "}
              </li>
              <li>
                {" "}
                닉네임 :{" "}
                <input
                  type="text"
                  name="nickname"
                  label="ID"
                  onChange={onNickname}
                />{" "}
              </li>

              <li>
                {" "}
                비밀번호 :{" "}
                <input
                  type="password"
                  name="password"
                  label="비밀번호"
                  onChange={onPassword}
                />{" "}
              </li>
              <li>
                {" "}
                비밀번호 확인 :{" "}
                <input
                  type="password"
                  name="password"
                  label="비밀번호 체크"
                  error={hasError("password")}
                  onChange={onChangePasswordCheck}
                />{" "}
                {passwordError && (
                  <alert style={{ color: "red" }}>
                    비밀번호가 일치하지 않습니다.
                  </alert>
                )}
              </li>
              <li>
                <input
                  type="checkbox"
                  name="item"
                  label="제로초의 말을 잘 들을 것을 동의합니다."
                  checked={term}
                  onChange={onChangeTerm}
                />
                {termError && (
                  <alert style={{ color: "red" }}>
                    약관에 동의하셔야 합니다.
                  </alert>
                )}
              </li>
              <button htmlType="submit" loading={signUpLoading}>
                회원가입
              </button>
              <button onClick={onReset}>취소</button>
            </ul>
          </form>
        </div>
      </div>
    </Navbar>
  );
};

export default SignUp;
