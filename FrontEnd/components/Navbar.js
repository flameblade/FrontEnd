import React, { useState } from "react";
import styled from "styled-components";
import { useMediaQuery } from "react-responsive";

import Link from "next/link";
import "./nav.module.css";
import wrapper from "../store/configureStore";

const Button = styled.button`
  margin-left: 20px;
  padding: 9x 25px;
  background-color: rgba(0, 136, 169, 1);
  border: none;
  border-radius: 50px;
  transition: all 0.3s ease 0s;
  cursor: pointer;

  &:hover {
    background-color: rgba(0, 136, 169, 0.8);
  }
`;

const Navbar = ({ children }) => {
  //   const Theme = theme;
  const [select__movieTitle, setTitleBg] = useState(false);

  const onChangeTitleBg = (e) => {
    e.preventDefault();
    setTitleBg(!select__movieTitle);
  };

  const isMobile = useMediaQuery({
    query: "(max-width:850px)",
  });

  return (
    <div>
      <nav class="navbar">
        <h1 class="logo">TIMESPACE</h1>
        <ul class={select__movieTitle ? "nav-links" : "nav-links mobile-menu"}>
          <li class="active">
            <a href="#"></a>Home
          </li>
          <li>
            <a href="#"></a>Tours
          </li>
          <li>
            <a href="#"></a>Explore
          </li>
          <li>
            <a href="#"></a>About
          </li>
          <li>
            <a href="#"></a>Home
          </li>
          <li>
            <a class="ctn" href="#">
              Contact
            </a>
          </li>
        </ul>
        <img
          src="./jaya.jpg"
          alt=""
          class="menu-btn"
          onClick={onChangeTitleBg}
        />
      </nav>

      {children}
    </div>
  );
};

// export const getServerSideProps = wrapper.getServerSideProps(
//   async (context) => {
//     context.store.dispatch({
//       type: LOAD_MY_INFO_REQUEST,
//     });
//     context.store.dispatch(END);
//     await context.store.sagaTask.toPromise();
//   }
// );

export default Navbar;
