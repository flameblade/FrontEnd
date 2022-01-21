import React, { useEffect } from "react";
import Head from "next/head";
import styled from "styled-components";

import Navbar from "../components/Navbar";

const ProjectForm = (props) => {
  const dispatch = useDispatch();
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    dispatch({
      type: LOAD_MY_INFO_REQUEST,
    });
  }, []);
};

export default ProjectForm;
