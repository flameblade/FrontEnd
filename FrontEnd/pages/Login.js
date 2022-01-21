import Router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { LOG_IN_REQUEST } from "../reducers/user";

const Login = () => {
  const dispatch = useDispatch();
  const { logInLoading, logInDone, logInError, me } = useSelector(
    (state) => state.user
  );
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (logInDone) {
      Router.replace("/");
    }
  }, [logInDone]);

  useEffect(() => {
    if (logInError) {
      alert(logInError);
    }
  }, [logInError]);

  const onUsername = useCallback(
    (e) => {
      setUsername(e.target.value);
    },
    [username]
  );

  const onPassword = useCallback(
    (e) => {
      setPassword(e.target.value);
    },
    [password]
  );

  const onSubmit = useCallback(
    (event) => {
      event.preventDefault();
      console.log(username, password);
      dispatch({
        type: LOG_IN_REQUEST,
        data: { username, password },
      });
    },
    [username, password]
  );

  return (
    <div class="Welcome_User">
      <div class="card-body">
        <font size="5" style={{ color: "white", marginBottom: "5px" }}>
          로그인
        </font>
        <form method="post" onSubmit={onSubmit}>
          <ul>
            <li>
              {" "}
              이 메 일 :{" "}
              <input
                type="text"
                name="username"
                label="아이디"
                onChange={onUsername}
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
            <button htmlType="submit" loading={logInLoading}>
              로그인
            </button>
          </ul>
        </form>
      </div>
    </div>
  );
};

export default Login;
