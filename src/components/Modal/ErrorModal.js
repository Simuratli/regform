import React from "react";
import ReactDOM from "react-dom";
import { ERROR_LOADING_DATA } from "../../store/actions/fullAddonPageAction";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import styled from "styled-components";

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
    border-radius: 20px;
    background: #fff;

    .err-message {
      font-size: 16px;
      margin: 0 0 20px 0;
    }

    .btn {
      padding: 10px;
      border-radius: 5px;
      border: none;
      font-size: 16px;
    }
  }
`;

const ErrorModal = () => {
  const history = useHistory();

  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const { app } = state;
  const { errorLoadingData } = app;
  const { isError, message } = errorLoadingData;

  return ReactDOM.createPortal(
    isError && (
      <ErrorModalCont>
        <div className="err-box">
          <div className="err-message">{message}</div>

          <button
            className="btn"
            onClick={() => {
              history.push("/");
              dispatch({
                type: ERROR_LOADING_DATA,
                payload: { isError: false, message: "" },
              });
            }}
          >
            Back to the home page
          </button>
        </div>
      </ErrorModalCont>
    ),
    document.getElementById("modal-root")
  );
};

export default ErrorModal;
