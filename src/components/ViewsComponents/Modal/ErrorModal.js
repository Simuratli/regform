import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { FormattedMessage } from "react-intl";

import get from "lodash/get";

import styled from "styled-components";
import { setError } from "../../../store/reducers/appReducer/actions/appAction";

const ErrorModalCont = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  z-index: 100000;

  .err-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 80%;
    padding: 20px;
    border-radius: 3px;
    background: #fff;

    .err-message {
      margin: 0 10px 20px 10px;
      color: #61626a;
      font-weight: 500;
      font-size: 18px;
      line-height: 22px;
    }

    .btn {
      padding: 10px;
      font-size: 16px;
      border: 2px solid #ff8f3e;
      background-color: #ff8f3e;
      font-weight: bold;
      color: #fff;
      outline: none;
    }
  }
`;

const ErrorModal = () => {
  const history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { app } = state;
  const { error } = app;
  const { isError, message, err } = error;

  window.scrollTo(0, 0);

  useEffect(() => {
    document.body.style.overflow = isError ? "hidden" : "auto";
  }, [isError]);

  if (get(err, "status") === 401) {
    dispatch(setError({}));

    localStorage.clear();
    sessionStorage.clear();
    return history.push("/");
  }

  return ReactDOM.createPortal(
    isError && (
      <ErrorModalCont>
        <div className="err-box">
          <div className="err-message">{message}</div>
          <button
            className="btn"
            onClick={() => {
              history.push("/");
              dispatch(setError({}));
            }}
          >
            <FormattedMessage id="back.home.page" />
          </button>
        </div>
      </ErrorModalCont>
    ),
    document.getElementById("modal-root")
  );
};

export default ErrorModal;
