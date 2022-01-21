import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/Navbar";

import { useDispatch, useSelector } from "react-redux";

import { LOAD_MY_INFO_REQUEST } from "../reducers/user";
// import "./App.css";

const Home = (props) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);

  return (
    <>
      <Head>
        <title> TIMESPACE </title>
      </Head>
      <Navbar>
        <header class="appbar">
          {/* Navbar */}
          <div class="header-content">
            <h2>Explore The Colorful World</h2>
            <div class="line"></div>
            <h1>A WONDERFUL GIFT</h1>
            <a href="#" class="ctn">
              {" "}
              Learn More{" "}
            </a>
          </div>
        </header>
        <div class="card">
          <div class="card-header">
            <div class="card-header-is_closed">
              <div class="card-header-text"> 모집중 </div>

              <div class="card-header-number"> 2 / 5 </div>
            </div>
          </div>

          <div class="card-body">
            <div class="card-body-header">
              <h1>4월 15일 순천만 동행구해요!</h1>

              <p class="card-body-hashtag">#여수 #순천 #광양</p>

              <p class="card-body-nickname">작성자: ENDORPHIN0710</p>
            </div>
            <div class="card-body-footer">
              <hr
                style={{
                  marginBottom: "8px",
                  opacity: 0.5,
                  borderColor: "#EF5A31",
                  width: "100%",
                }}
              />
              <i class="icon icon-view_count"></i>조회 38회
              <i class="icon icon-comments_count"></i>댓글 4개
              <i class="reg_date"> 2018/04/12 </i>
            </div>
          </div>
        </div>
      </Navbar>
    </>
  );
};

const Jaya = styled.img`
  width: 100%;
  max-height: 450px;
  @media screen and (min-width: 500px) {
    max-height: 300px;
  }
`;

export default Home;
