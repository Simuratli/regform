import React, { useEffect, useState } from "react";

import styled from "styled-components";
import { httpClient } from "../../services/services";

import { useDispatch } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import {
  setError,
  setIsLoading,
} from "../../store/reducers/appReducer/actions/appAction";

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
    dispatch(setIsLoading(true));

    httpClient.post(`/tests/error-page/${value}`).catch((err) => {
      dispatch(setIsLoading(false));
      dispatch(setError(err.response));
    });
  };

  useEffect(() => {
    dispatch(setError({}));
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
