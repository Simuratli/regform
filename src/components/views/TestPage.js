import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { SET_IS_LOADING } from "../../store/types";
import { httpClient } from "../../services/services";

import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { ERROR_LOADING_DATA } from "../../store/actions/addonCardAction";

const TestCont = styled.div`
  width: 100%;
  max-width: 1146px;
  height: 400px;
  margin: 0 auto;

  .input {
    padding: 10px;
    font-size: 16px;
  }

  .btn {
    padding: 10px;
    margin: 0 0 0 20px;
    &:hover {
      box-shadow: none;
    }
  }
`;

const TestPage = () => {
  const [value, setValue] = useState();

  const { password } = useParams();
  const history = useHistory();

  if (password !== "IIuds6297") {
    history.push("/");
  }

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch({ type: SET_IS_LOADING, payload: true });

    httpClient
      .post(`/tests/error-page/${value}`)
      .then((res) => {
        console.log(res, "RES");
      })
      .catch((err) => {
        console.log(err.response.data, "!!!!!");

        dispatch({ type: SET_IS_LOADING, payload: false });
        dispatch({
          type: "ERROR_LOADING_DATA",
          payload: {
            isError: true,
            err: {
              status: err?.response?.data?.status,
              statusText: err?.response?.data?.title,
            },
          },
        });
      });
  };

  useEffect(() => {
    dispatch({
      type: "ERROR_LOADING_DATA",
      payload: { isError: false, err: {} },
    });
  }, []);

  return (
    <TestCont>
      <input
        className="input"
        type="number"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />

      <button className="btn" disabled={!value} onClick={handleSubmit}>
        SEND
      </button>
    </TestCont>
  );
};

export default TestPage;
