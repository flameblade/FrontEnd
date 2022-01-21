import React from "react";
import Head from "next/head";
import styled from "styled-components";
// import "./App.css";

const Home = (props) => {
  return (
    <div>
      <div>
        <Jaya src="jaya.jpg" />
      </div>

      <div class="card">
        <div class="card-header">
          <div class="card-header-is_closed">
            <div class="card-header-number"> 작업상태 </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <h1>프로젝트 ID : 1</h1>
            <h1>프로젝트 제목 : 개인 블로그 만들기</h1>
            <h1>프로젝트 생성 날짜 : 2021년 12월 20일</h1>
            <h1>프로젝트 시작 날짜 : 2021년 12월 21일</h1>
            <h1>work Conunt : 7</h1>
            <p class="card-body-hashtag">#여수 #순천 #광양</p>
            <p class="card-body-nickname">작성자: ENDORPHIN0710</p>
          </div>

          <p class="card-body-description">
            <h4> work ID : 1</h4>
            <h4> work title : 로그인 페이지 작성</h4>
            <h4> work status : 진행중 </h4>
            <a> 진행 세부 사항</a>
          </p>

          <div class="card-body-footer">
            <hr
              style={{
                marginBottom: "8px",
                opacity: 0.5,
                borderColor: "#EF5A31",
              }}
            />
            <i class="icon icon-view_count"></i>조회 38회
            <i class="icon icon-comments_count"></i>댓글 4개
            <i class="reg_date"> 프로젝트 만료일 : 2021년 12월 22일 </i>
          </div>
        </div>
        <div class="card-header">
          <div class="card-header-is_closed">
            <div class="card-header-number"> 작업상태 </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <h1>프로젝트 ID : 1</h1>
            <h1>프로젝트 제목 : 개인 블로그 만들기</h1>
            <h1>프로젝트 생성 날짜 : 2021년 12월 20일</h1>
            <h1>프로젝트 시작 날짜 : 2021년 12월 21일</h1>
            <h1>work Conunt : 7</h1>
            <p class="card-body-hashtag">#여수 #순천 #광양</p>
            <p class="card-body-nickname">작성자: ENDORPHIN0710</p>
          </div>

          <p class="card-body-description">
            <h4> work ID : 1</h4>
            <h4> work title : 로그인 페이지 작성</h4>
            <h4> work status : 진행중 </h4>
            <a> 진행 세부 사항</a>
          </p>

          <div class="card-body-footer">
            <hr
              style={{
                marginBottom: "8px",
                opacity: 0.5,
                borderColor: "#EF5A31",
              }}
            />
            <i class="icon icon-view_count"></i>조회 38회
            <i class="icon icon-comments_count"></i>댓글 4개
            <i class="reg_date"> 프로젝트 만료일 : 2021년 12월 22일 </i>
            <br />
          </div>
        </div>
        <div class="card-header">
          <div class="card-header-is_closed">
            <div class="card-header-number"> 작업상태 </div>
          </div>
        </div>
        <div class="card-body">
          <div class="card-body-header">
            <h1>프로젝트 ID : 1</h1>
            <h1>프로젝트 제목 : 개인 블로그 만들기</h1>
            <h1>프로젝트 생성 날짜 : 2021년 12월 20일</h1>
            <h1>프로젝트 시작 날짜 : 2021년 12월 21일</h1>
            <h1>work Conunt : 7</h1>
            <p class="card-body-hashtag">#여수 #순천 #광양</p>
            <p class="card-body-nickname">작성자: ENDORPHIN0710</p>
          </div>
          <p class="card-body-description">
            <h4> work ID : 1</h4>
            <h4> work title : 로그인 페이지 작성</h4>
            <h4> work status : 진행중 </h4>
            <a> 진행 세부 사항</a>
          </p>
          <div class="card-body-footer">
            <hr
              style={{
                marginBottom: "8px",
                opacity: 0.5,
                borderColor: "#EF5A31",
              }}
            />
            <i class="icon icon-view_count"></i>조회 38회
            <i class="icon icon-comments_count"></i>댓글 4개
            <i class="reg_date"> 프로젝트 만료일 : 2021년 12월 22일 </i>
          </div>
        </div>
      </div>
    </div>
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
